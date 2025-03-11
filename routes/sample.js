const sampleTransactions = [
    {
        userName: 'John Doe',
        userEmail: 'john.doe@example.com',
        transactionId: 'TXN001',
        amount: 150.75,
        method: 'Credit Card',
        expenseType: 'Food',
        date: new Date('2025-03-01'),
        description: 'Dinner at a restaurant'
    },
    {
        userName: 'Jane Smith',
        userEmail: 'jane.smith@example.com',
        transactionId: 'TXN002',
        amount: 500,
        method: 'Bank Transfer',
        expenseType: 'Travel',
        date: new Date('2025-03-02'),
        description: 'Flight ticket to New York'
    },
    {
        userName: 'Alice Johnson',
        userEmail: 'alice.johnson@example.com',
        transactionId: 'TXN003',
        amount: 100,
        method: 'Cash',
        expenseType: 'Entertainment',
        date: new Date('2025-03-03'),
        description: 'Movie night'
    },
    {
        userName: 'Bob Williams',
        userEmail: 'bob.williams@example.com',
        transactionId: 'TXN004',
        amount: 200,
        method: 'Debit Card',
        expenseType: 'Utilities',
        date: new Date('2025-03-04'),
        description: 'Electricity bill'
    },
    {
        userName: 'Emma Brown',
        userEmail: 'emma.brown@example.com',
        transactionId: 'TXN005',
        amount: 50,
        method: 'PayPal',
        expenseType: 'Others',
        date: new Date('2025-03-05'),
        description: 'Gift for a friend'
    }
];

export default sampleTransactions;
