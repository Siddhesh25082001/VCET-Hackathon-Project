# VCET Hackathon Project - Runner's Up

### Problem Statement: 
Creating a single user friendly dashboard essentially fulfilling all needs of the user by providing valuable information like availability of ICU beds, oxygen, ambulances and even the patient status all in one place

#### The Web-App is being hosted on Heroku server and can be accessed by the following link: [**Covid Care Center**](https://covid-care-vcet.herokuapp.com/ "Covid-Care-Center")

---

### System Architecture : 
![WhatsApp Image 2021-10-02 at 14 47 37](https://user-images.githubusercontent.com/67231450/135710721-92fb872d-b285-4be8-bbc3-4e8378681384.jpeg "System-Architecture")

---

### Steps to chat with our bot:
 - First type the following message to our bot to activate it
``` 
  join not-beauty
```
 - Now if you are looking for a bed (covid) type the following message
```  
  /bed
```

 - Now you can see the bot asks you to enter you name so kindly enter you correct full name

 - The bots sends the confirmation msg after receiving the name and also asks for your mobile number so kindly enter you 10 digit valid mobile number

 - Your details have been recorded by the bot. now just to confirm it, simply type confirm and your data is successfully sent to the call team which will call asap on the number you just entered.

---

### There are Two Major Elements of the Web-App namely Call Team and Bed Allocation Team : 

**Call Team : **

A call team is generally a squad of 15-20 non-medicos which work 24 hours a day, seven days a week to verify the covid positive patient and collect information which the bot missed. The data is forwarded to the call centre operator via the bot. On their online interface, the data is presented to the team in the form of a table and a QR code. The QR code simplifies their lives because all they have to do is scan it to receive the contact information they need to work. They commence by calling each patient one by one and filling out the contents of the form provided on their web interface in addition to the contact information form. After the patient has been confirmed and all required details such as symptoms, oxygen saturation level, and so on have been collected, the patient is registered into the database and forwarded to the BAT for further process.

** Bed Allocation Team (BAT): **

This is the most important part of our Pipeline. BAT stands for Bed Allocation team, name itself suggest the work of this team. Unlike call team, bat is a team of doctors and medical professionals who decide which kind of bed (ordinary bed, o2 bed, ICU, etc) should be allocated to the patient. BAT has a web interface where it gets the list of the patients forwarded by the call team and then they check the availability of the bed in the entire ward and assign it to the patient as per the need. To check the availability of the bed, BAT has been provided by the Dashboard which shows the number of bed (of different categories) vacant in the ward. Also, facility (hospital) wise data is presented to them to make their work more efficient and fast. Once the Bat decides the facility and the type of bed to be allocated, they have to fill a form and allocate the patient in that particular facility. One final validation is received from the facility and the patient is admitted there and the treatment begins...

---

### Implementation

##### Sign Up Page
![image](https://user-images.githubusercontent.com/67231450/135710865-43614ae4-c961-4178-8daf-41d462562da2.png)

##### Login Page
![image](https://user-images.githubusercontent.com/67231450/135710958-7eb49c94-ebc7-4157-b775-3a01e8f7b1e0.png)

##### Bat Panel - 1 (Allotment)
![image](https://user-images.githubusercontent.com/67231450/135710996-c18ee438-f050-4bdc-80e3-8c7b27c3df6d.png)

#### Bat Panel - 2 (Patients)
![image](https://user-images.githubusercontent.com/67231450/135711042-03aab8ab-7803-4da2-bc40-285c81bf0460.png)

#### Bat Panel - 3 (Facilities)
![image](https://user-images.githubusercontent.com/67231450/135711061-f4a0f738-fe1a-47c7-8be3-c48c8398e361.png)

#### Dashboard
![image](https://user-images.githubusercontent.com/67231450/135711201-0bc3cd80-ab23-4ccd-8966-55431939ba67.png)

#### Dashboard - Facilties
![image](https://user-images.githubusercontent.com/67231450/135711211-1e706906-8132-44ec-ae35-6ebc23a669a5.png)

#### Dashboard - Patients
![image](https://user-images.githubusercontent.com/67231450/135711279-5a6a5751-313e-4fb9-a90d-8e900e65c199.png)

#### Call Team - Call Form
![image](https://user-images.githubusercontent.com/67231450/135711184-eab96b8a-0216-4e75-aece-1959bb31edb8.png)
