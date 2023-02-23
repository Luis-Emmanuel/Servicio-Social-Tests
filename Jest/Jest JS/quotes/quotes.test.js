// Version con error
// import { getQuote } from ".";
// test('getQuote', () => {
//     const quote = getQuote();
//     expect(quote).toBe(
//         "No creas todo lo que lees en internet, por Benjamin Franklin"
//     );
// });

// Version correcta
import { getQuote } from ".";
test('getQuote', async () => {
    const quote = await getQuote();
    expect(quote).toBe("No creas todo lo que lees en internet, por Benjamin Franklin");
});
