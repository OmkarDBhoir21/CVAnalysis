class Account:
    def __init__(self, cardNumber, pin, balance, withdrawalAmount, accountType):
        self.cardNumber = cardNumber
        self.pin = pin
        self.balance = balance
        self.withdrawalAmount = withdrawalAmount
        self.accountType = accountType

    def update(self, withdrawalAmount):
        if self.balance >= withdrawalAmount:
            self.withdrawalAmount = withdrawalAmount
            self.balance -= withdrawalAmount


class ATM:
    def __init__(self, accountList):
        self.accountList = accountList

    def transaction(self, cardNumber, pin, withdrawalAmount):
        for account in self.accountList:
            if account.cardNumber == cardNumber and account.pin == pin:
                account.update(withdrawalAmount)
                return account
            return None

        def filter(self, accountType):
            accountDict = {}
            for account in self.accountList:
                if account.accountType.lower() == accountType.lower():
                    accountDict[account.cardNumber] = account.balance
                    return accountDict


accountList = []
n = int(input())
for i in range(n):
    cardNumber = int(input())
    pin = int(input())
    balance = float(input())
    withdrawalAmount = float(input())
    accountType = input()
    accountList.append(Account(cardNumber, pin, balance,
                       withdrawalAmount, accountType))


atm = ATM(accountList)
cardNumber = int(input())
pin = int(input())
withdrawalAmount = float(input())
accountType = input()
account = atm.transaction(cardNumber, pin, withdrawalAmount)
dic = atm.filter(accountType)
if account != None:
    print(account.cardNumber, account.balance, account.withdrawalAmount)
else:
    print("No account Exists")
if dic:
    for k, v in dic.items():
        print(k, v)
else:
    print("No match Found")
