# VH-21-11-HalfByte

### Problem Statement: 
Creating a single user friendly dashboard essentially fulfilling all needs of the user by providing valuable information like availability of ICU beds, oxygen, ambulances and even the patient status all in one place

### System Architecture : 
![System Architecture](https://user-images.githubusercontent.com/67231450/135576793-c11d67e4-6d39-4e3d-bab7-06cff06536e9.PNG)

### -----------------------------------------------------------------------------------

### Steps to chat with our bot:

Step1: First type the following message to our bot to activate it
  join not-beauty

step 2: Now if you are looking for a bed (covid) type the following message
  /bed

Step 3: Now you can see the bot asks you to enter you name so kindly enter you correct full name

Step 4: The bots sends the confirmation msg after receiving the name and also asks for your mobile number so kindly enter you 10 digit valid mobile number

Step 5: Your details have been recorded by the bot. now just to confirm it, simply type confirm and your data is successfully sent to the call team which will call asap on the number you just entered.

#### -----------------------------------------------------------------------------------

### There are Two Major Elements of the Web-App namely Call Team and Bed Allocation Team

#### ------------------------------------------------------------------------------------

### Call Team: 

#### Call team is generally a team of 15-20 non-medicos working 24/7 to verify the covid positive patient and collecting some crucial information which bot didn’t. Bot forwards the collected data to the call team. The data is visible to the team in a form of a table and in a QR code on their web interface. QR code makes their life easy as they simply have to scan it to get the contact details on which they have to work. They start calling each patient individually one by one and fill the details of the form provided on their web interface besides the contact detail form. Once the patient is verified and all the required details like symptoms, o2 saturation level etc are recorded, that patient is registered in the database and is forwarded to the BAT for further process.

### Bed Allocation Team (BAT):

#### This is the most important part of our Pipeline. BAT stands for Bed Allocation team, name itself suggest the work of this team. Unlike call team, bat is a team of doctors and medical professionals who decide which kind of bed (ordinary bed, o2 bed, ICU, etc) should be allocated to the patient. BAT has a web interface where it gets the list of the patients forwarded by the call team and then they check the availability of the bed in the entire ward and assign it to the patient as per the need. To check the availability of the bed, BAT has been provided by the Dashboard which shows the number of bed (of different categories) vacant in the ward. Also, facility (hospital) wise data is presented to them to make their work more efficient and fast. Once the Bat decides the facility and the type of bed to be allocated, they have to fill a form and allocate the patient in that particular facility. One final validation is received from the facility and the patient is admitted there and the treatment begins...

### --------------------------------------------------------------------------------------------
