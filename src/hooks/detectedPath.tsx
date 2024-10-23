import { useEffect, useState } from "react";

// Hook qui detecte la route sur laquelle se trouve l'utilisateur
const DetectedPath = () => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);
        return () => window.removeEventListener('popstate', onLocationChange);
    }, []);

    return path;
}

export default DetectedPath;
