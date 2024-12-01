import random
import string

def generate_password(length=12, use_uppercase=True, use_numbers=True, use_special_chars=True):
    if length < 4:
        raise ValueError("Password length should be at least 4.")

    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase if use_uppercase else ''
    numbers = string.digits if use_numbers else ''
    special_chars = "!@#$%^&*()-_=+[]{}|;:,.<>?" if use_special_chars else ''

    all_chars = lowercase + uppercase + numbers + special_chars

    if not all_chars:
        raise ValueError("At least one character set must be enabled.")

    password = [
        random.choice(lowercase),
        random.choice(uppercase) if use_uppercase else random.choice(lowercase),
        random.choice(numbers) if use_numbers else random.choice(lowercase),
        random.choice(special_chars) if use_special_chars else random.choice(lowercase)
    ]

    password += random.choices(all_chars, k=length - len(password))
    random.shuffle(password)
    
    return ''.join(password)

if __name__ == "__main__":
    print("Generated Password:", generate_password(length=16))
