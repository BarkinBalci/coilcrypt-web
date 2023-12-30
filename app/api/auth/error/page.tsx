export default function ErrorPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="mx-auto flex flex-col justify-center space-y-6">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Unable to sign in with email
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        The sign in link is no longer valid
                    </p>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                    It may have been used already or it may have expired.
                </p>
                <a href="/api/auth/signin" className="btn">Sign-in</a>
            </div>
        </div>
    );
}