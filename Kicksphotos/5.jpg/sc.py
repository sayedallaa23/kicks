import os  
     
path = '/home/kareem/front end /kicks/Kicksphotos'
files = os.listdir(path)
index=1
        
for index, file in enumerate(files):
     os.rename(os.path.join(path, file),os.path.join(path,''.join([str(index),'.jpg'])))
     index = index+1