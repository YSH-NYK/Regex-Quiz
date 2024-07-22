
   let questions = [
        {
            "id": 1,
            "question": "Write a regular expression to match an email address.",
            "hint": "An email address usually has the format: username@domain.extension",
            "testcases": [
                "example@example.com",
                "user.name@domain.co",
                "firstname.lastname@subdomain.domain.org",
                "email@domain",
                "plainaddress"
            ]
        },
        {
            "id": 2,
            "question": "Write a regular expression to match a date in the format YYYY-MM-DD.",
            "hint": "The year is four digits, the month is two digits, and the day is two digits, separated by hyphens.",
            "testcases": [
                "2024-07-15",
                "1999-12-31",
                "2021-02-28",
                "2024/07/15",
                "15-07-2024"
            ]
        },
        {
            "id": 3,
            "question": "Write a regular expression to match a U.S. phone number (e.g., 123-456-7890).",
            "hint": "The phone number consists of three groups of digits separated by hyphens.",
            "testcases": [
                "123-456-7890",
                "987-654-3210",
                "555-555-5555",
                "1234567890",
                "123-45-6789"
            ]
        },
        {
            "id": 4,
            "question": "Write a regular expression to match a hexadecimal color code (e.g., #FFFFFF).",
            "hint": "Hexadecimal color codes start with a hash (#) followed by exactly six hexadecimal digits.",
            "testcases": [
                "#FFFFFF",
                "#000000",
                "#FF5733",
                "FFFFFF",
                "#FFF",
                "#1234567"
            ]
        },
        {
            "id": 5,
            "question": "Write a regular expression to match a URL.",
            "hint": "A URL usually starts with http:// or https:// followed by the domain name and optional path.",
            "testcases": [
                "https://www.example.com",
                "http://example.org",
                "www.example.com",
                "https://example",
                "http://example.com/path/to/page"
            ]
        },
        {
            "id": 6,
            "question": "Write a regular expression to match a valid IPv4 address.",
            "hint": "An IPv4 address consists of four groups of one to three digits, separated by periods.",
            "testcases": [
                "192.168.0.1",
                "255.255.255.255",
                "0.0.0.0",
                "256.256.256.256",
                "192.168.0"
            ]
        },
        {
            "id": 7,
            "question": "Write a regular expression to match a password with at least 8 characters, one uppercase letter, one lowercase letter, and one number.",
            "hint": "Use lookaheads to ensure the presence of each required character type.",
            "testcases": [
                "Password1",
                "password",
                "PASSWORD1",
                "Pass1",
                "Password123"
            ]
        },
        {
            "id": 8,
            "question": "Write a regular expression to match a 5-digit U.S. ZIP code.",
            "hint": "A ZIP code consists of exactly five digits.",
            "testcases": [
                "12345",
                "54321",
                "1234",
                "123456",
                "ABCDE"
            ]
        },
        {
            "id": 9,
            "question": "Write a regular expression to match a string that contains only alphabetic characters (both uppercase and lowercase).",
            "hint": "Use character classes to include both uppercase and lowercase letters.",
            "testcases": [
                "HelloWorld",
                "hello",
                "HELLO",
                "Hello123",
                "Hello World"
            ]
        },
        {
            "id": 10,
            "question": "Write a regular expression to match a credit card number (16 digits, optionally separated by spaces or hyphens).",
            "hint": "The number can be grouped in four sets of four digits, separated by spaces or hyphens.",
            "testcases": [
                "1234 5678 9012 3456",
                "1234-5678-9012-3456",
                "1234567890123456",
                "1234 5678 9012",
                "1234-5678-9012-34567"
            ]
        },
        {
            "id": 11,
            "question": "Write a regular expression to match a string that contains only digits.",
            "hint": "The string should contain only numeric characters.",
            "testcases": [
                "123456",
                "9876543210",
                "0",
                "123abc",
                "12.34"
            ]
        },
        {
            "id": 12,
            "question": "Write a regular expression to match a string that does not contain any digits.",
            "hint": "The string should contain any character except digits.",
            "testcases": [
                "abcdef",
                "HelloWorld",
                "!@#$%^&*()",
                "abc123",
                "abc123def"
            ]
        },
        {
            "id": 13,
            "question": "Write a regular expression to match a string that starts with a capital letter.",
            "hint": "The first character of the string should be an uppercase letter.",
            "testcases": [
                "Hello",
                "World",
                "Regex",
                "hello",
                "world"
            ]
        },
        {
            "id": 14,
            "question": "Write a regular expression to match a string that ends with a period.",
            "hint": "The last character of the string should be a period (.).",
            "testcases": [
                "Hello.",
                "This is a test.",
                "Ends with period.",
                "No period",
                "Another test"
            ]
        },
        {
            "id": 15,
            "question": "Write a regular expression to match a string that contains the word 'regex' (case insensitive).",
            "hint": "The string should contain the word 'regex' regardless of case.",
            "testcases": [
                "I love regex",
                "REGEX is powerful",
                "Using Regex is fun",
                "This is not a match",
                "Regex"
            ]
        },
        {
            "id": 16,
            "question": "Write a regular expression to match a string that contains at least one whitespace character.",
            "hint": "The string should contain at least one space, tab, or newline character.",
            "testcases": [
                "Hello World",
                "This\tis\ta\ttest",
                "New\nLine",
                "NoWhitespace",
                "Whitespace at the end "
            ]
        },
        {
            "id": 17,
            "question": "Write a regular expression to match a string that contains only word characters (letters, digits, and underscores).",
            "hint": "Use the \\w character class.",
            "testcases": [
                "HelloWorld",
                "Hello_World123",
                "123456",
                "Hello-World",
                "Hello World"
            ]
        },
        {
            "id": 18,
            "question": "Write a regular expression to match a string that contains a number with exactly two decimal places.",
            "hint": "The number should have a decimal point followed by exactly two digits.",
            "testcases": [
                "12.34",
                "0.99",
                "123.45",
                "12",
                "123.456"
            ]
        },
        {
            "id": 19,
            "question": "Write a regular expression to match a string that starts with 'abc' and ends with 'xyz'.",
            "hint": "The string should start with 'abc' and end with 'xyz' with any characters in between.",
            "testcases": [
                "abc123xyz",
                "abc_xyz",
                "abcxyz",
                "123abcxyz",
                "abc123"
            ]
        },
        {
            "id": 20,
            "question": "Write a regular expression to match a string that is a valid 24-hour time format (HH:MM).",
            "hint": "The time format should be HH:MM where HH is 00-23 and MM is 00-59.",
            "testcases": [
                "23:59",
                "00:00",
                "12:34",
                "24:00",
                "12:60"
            ]
        },
        {
            "id": 21,
            "question": "Write a regular expression to match a string that contains at least one uppercase letter.",
            "hint": "The string should contain at least one uppercase letter.",
            "testcases": [
                "Hello",
                "world",
                "HELLO",
                "hello",
                "123"
            ]
        },
        {
            "id": 22,
            "question": "Write a regular expression to match a string that is a palindrome (case insensitive).",
            "hint": "A palindrome reads the same forwards and backwards.",
            "testcases": [
                "Madam",
                "racecar",
                "Level",
                "Hello",
                "world"
            ]
        },
        {
            "id": 23,
            "question": "Write a regular expression to match a string that contains a valid social security number (SSN) in the format XXX-XX-XXXX.",
            "hint": "An SSN consists of three groups of digits separated by hyphens.",
            "testcases": [
                "123-45-6789",
                "987-65-4321",
                "123456789",
                "123-45-678",
                "123-456-7890"
            ]
        },
        {
            "id": 24,
            "question": "Write a regular expression to match a string that contains only lowercase letters.",
            "hint": "The string should contain only lowercase letters.",
            "testcases": [
                "hello",
                "world",
                "hello123",
                "Hello",
                "HELLO"
            ]
        },
        {
            "id": 25,
            "question": "Write a regular expression to match a string that contains only uppercase letters.",
            "hint": "The string should contain only uppercase letters.",
            "testcases": [
                "HELLO",
                "WORLD",
                "HELLO123",
                "hello",
                "Hello"
            ]
        },
        {
            "id": 26,
            "question": "Write a regular expression to match a string that contains only alphanumeric characters.",
            "hint": "The string should contain only letters and digits.",
            "testcases": [
                "Hello123",
                "HelloWorld",
                "123456",
                "Hello World",
                "Hello-123"
            ]
        },
        {
            "id": 27,
            "question": "Write a regular expression to match a string that contains at least one digit.",
            "hint": "The string should contain at least one numeric character.",
            "testcases": [
                "Hello123",
                "123",
                "0",
                "Hello",
                "World"
            ]
        },
        {
            "id": 28,
            "question": "Write a regular expression to match a string that contains exactly 10 digits.",
            "hint": "The string should contain exactly 10 numeric characters.",
            "testcases": [
                "1234567890",
                "0987654321",
                "12345",
                "12345678901",
                "Hello1234567890"
            ]
        },
        {
            "id": 29,
            "question": "Write a regular expression to match a string that contains only vowels (case insensitive).",
            "hint": "The string should contain only the characters 'a', 'e', 'i', 'o', 'u' (both uppercase and lowercase).",
            "testcases": [
                "aeiou",
                "AEIOU",
                "aei",
                "hello",
                "world"
            ]
        },
        {
            "id": 30,
            "question": "Write a regular expression to match a string that starts and ends with the same character.",
            "hint": "The first and last character of the string should be the same.",
            "testcases": [
                "racecar",
                "level",
                "anna",
                "hello",
                "world"
            ]
        }
    ]

