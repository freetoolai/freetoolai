/**
 * Affiliate mapping for AI tools.
 * Add tools and their affiliate links here.
 */
export const affiliateMap = {
    'perplexity': 'https://perplexity.ai?ref=freetoolai',
};

/**
 * Utility to get affiliate link or fallback to original URL
 * @param {string} toolSlug - The slug of the tool
 * @param {string} originalUrl - The original tool website
 * @returns {string} The affiliate URL or original URL
 */
export function getAffiliateLink(toolSlug, originalUrl) {
    if (!toolSlug) return originalUrl;

    const affiliateUrl = affiliateMap[toolSlug.toLowerCase()];
    if (affiliateUrl) {
        return affiliateUrl;
    }

    return originalUrl;
}
