name = input("Enter your name: ")

while True:
    try:
        age = int(input("Enter your age: "))
        break
    except ValueError:
        print("Please enter a valid number for your age.")

print("Hello, " + name + "! You are " + str(age) + " years old.")
print("Thank you for providing your information.")