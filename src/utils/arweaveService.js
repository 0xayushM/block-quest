import arweave from './arweave';
import wallet from '../wallet.json';

export async function storeCardData(card) {
    const transaction = await arweave.createTransaction({
        data: JSON.stringify(card), // Card data is saved as JSON
    }, wallet);

    transaction.addTag('Content-Type', 'application/json');
    await arweave.transactions.sign(transaction, wallet);
    await arweave.transactions.post(transaction);

    return transaction.id; // Returns the transaction ID for tracking
}

export async function storeBattleResult(winner) {
    const transaction = await arweave.createTransaction({
        data: JSON.stringify({ winner: winner.name }), // Save the winner
    }, wallet);

    transaction.addTag('Content-Type', 'application/json');
    await arweave.transactions.sign(transaction, wallet);
    await arweave.transactions.post(transaction);

    return transaction.id;
}
