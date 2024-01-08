export const decryptFile = async (file: File, password: string) => {
    const fileData = await file.arrayBuffer();
    const salt = fileData.slice(0, 16);
    const iv = fileData.slice(16, 32);
    const actualEncryptedData = fileData.slice(32);
    const passwordKey = await window.crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(password),
        "PBKDF2",
        false,
        ["deriveKey"]
    );
    const aesKey = await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 1000000,
            hash: "SHA-256",
        },
        passwordKey,
        { name: "AES-CBC", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
    const decryptedContent = await window.crypto.subtle.decrypt(
        {
            name: "AES-CBC",
            iv: iv,
        },
        aesKey,
        actualEncryptedData
    );

    return decryptedContent;
};

export const encryptFile = async (file: File, password: string): Promise<ArrayBuffer> => {
    const fileData = await file.arrayBuffer();
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const passwordKey = await window.crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(password),
        "PBKDF2",
        false,
        ["deriveKey"]
    );
    const aesKey = await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 1000000,
            hash: "SHA-256",
        },
        passwordKey,
        { name: "AES-CBC", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
    const encryptedData = await window.crypto.subtle.encrypt(
        {
            name: "AES-CBC",
            iv: iv,
        },
        aesKey,
        fileData
    );
    const encryptedContent = new Uint8Array(
        salt.byteLength + iv.byteLength + encryptedData.byteLength
    );
    encryptedContent.set(new Uint8Array(salt), 0);
    encryptedContent.set(new Uint8Array(iv), salt.byteLength);
    encryptedContent.set(
        new Uint8Array(encryptedData),
        salt.byteLength + iv.byteLength
    );
    return encryptedContent.buffer;
};