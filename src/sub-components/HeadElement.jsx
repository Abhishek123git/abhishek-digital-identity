import { Helmet } from "react-helmet-async";

// Helper to join base + path without double slashes
const buildUrl = (base, path) => {
    const cleanBase = base.replace(/\/+$/, '');       // strip trailing slashes
    const cleanPath = (path || '').replace(/^\/+/, ''); // strip leading slashes
    return cleanPath ? `${cleanBase}/${cleanPath}` : `${cleanBase}/`;
};

export function HeadElement({ pageurl, pagetitle, pagedescription }) {
    const canonicalUrl = buildUrl(window.location.origin, pageurl);
    const ogImageUrl = `${window.location.origin}/images/og-homeimage.png`;
    return (
        <Helmet>
            <title>{pagetitle ? `${pagetitle} | Abhishek Kumar - Portfolio` : "Abhishek Kumar - Portfolio"}</title>
            <meta name="description" content={pagedescription} />

            {/* Canonical — always use window.location.origin, not PUBLIC_URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={pagetitle || "Abhishek Kumar - Portfolio"} />
            <meta property="og:description" content={pagedescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImageUrl} />
        </Helmet>
    );
}
