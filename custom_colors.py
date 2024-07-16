import json
from distributor.models import CustomColors

def save_colors():
    colors_file = open('custom_colors.json')
    custom_colors = json.loads(colors_file.read())
    for color in custom_colors:
        new_color = CustomColors(value=color['value'], label=color['label'], color=color['color'])
        new_color.save()
    colors_file.close()
    return "Done saving colors to the database"