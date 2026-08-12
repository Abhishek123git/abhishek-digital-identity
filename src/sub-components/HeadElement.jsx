import { Helmet } from "react-helmet-async";

export function HeadElement({ pageurl, pagetitle, pagedescription }) {
    return (
        <Helmet>
            <title>{pagetitle ? `${pagetitle} | Abhishek Kumar - Portfolio` : "Abhishek Kumar - Portfolio"}</title>
            <meta name="description" content={pagedescription} />

            {/* Canonical */}
            <link rel="canonical" href={`${process.env.PUBLIC_URL}/${pageurl}`} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={pagetitle || "Abhishek Kumar - Portfolio"} />
            <meta property="og:description" content={pagedescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${window.location.origin}/${pageurl}`} />
            <meta property="og:image" content={`${window.location.origin}/images/og-homeimage.png`} />
        </Helmet>
    );
}
