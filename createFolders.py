import os 

folder_path = "C:\\Users\\josej\\Desktop\\POO"

for number in range(1, 17):
    folder_name = f"Semana {number}"
    folder_full_path = os.path.join(folder_path, folder_name)
    
    try:
        for subfolder_name in ["Exercism", "TC","Preguntas"]:
            subfolder_full_path = os.path.join(folder_full_path, subfolder_name)
            os.mkdir(subfolder_full_path)
    except OSError as e:
        print(f"Error creating folder '{folder_name}': {e}")
