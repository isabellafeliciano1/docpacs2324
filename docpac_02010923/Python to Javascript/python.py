"""import random

colors = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Black']

color = random.sample(colors, 2)
print(color)

if 'Blue' in color or 'Green' in color: (
    print("Im Grue Dabudi Dabudie")
)
elif 'Black' in color and 'Yellow' in color: (
    print('Black and Yellow, Black and Yellow, Black and Yellow, Black and Yellow')
)
else: (
    print('If I was literally anything else I would die')
)"""



class Impostor: 
    def __init__(self, role):
        self.role = role

    def character(self):
        print(self.role)

amongus = Impostor("Impostor")

amongus.character()