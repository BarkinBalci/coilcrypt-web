export const decryptFile = async (file: File, password: string) => {
    const fileData = await file.arrayBuffer();
    const salt = new Uint8Array(fileData.slice(0, 16));
    const iv = new Uint8Array(fileData.slice(16, 32));
    const actualEncryptedData = fileData.slice(32);

    const aesKey = await PBKDF2(password, salt, 1000000, "SHA-256");
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
    const aesKey = await PBKDF2(password, salt, 1000000, "SHA-256");
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

//Password Based Key Derivation Function 2
export const PBKDF2 = async (
    password: string,
    salt: Uint8Array,
    iterations: number,
    hash: string
) => {
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
            iterations: iterations,
            hash: hash,
        },
        passwordKey,
        { name: "AES-CBC", length: 256 },
        false,
        ["encrypt", "decrypt"]
    );
    return aesKey;
};