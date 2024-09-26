export async function scrapeAmazonProduct(urL: string) {
    if(!urL) return;

    


    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id = (100000 * Math.random()) | 0;


    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,

    }

    try {
        const response = 
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.massage}`);
    }
}