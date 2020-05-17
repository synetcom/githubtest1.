num = int(input("Tell me a number"))
# int() is a casting same as parseInt() in JavaScript
mod = num % 2 # modulo(verb) modulus(noun)
if mod >0:
    print("Sorry, it's an odd number")
else:
    print("Yay, this is an even number")