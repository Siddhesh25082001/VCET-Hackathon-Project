# VCET Hackathon Project - Runner's Up

### Problem Statement: 
Creating a single user friendly dashboard essentially fulfilling all needs of the user by providing valuable information like availability of ICU beds, oxygen, ambulances and even the patient status all in one place

#### The Web-App is being hosted on Heroku server and can be accessed by the following link: [**Covid Care Center**](https://covid-care-vcet.herokuapp.com/ "Covid-Care-Center")

---

### System Architecture : 
![WhatsApp Image 2021-10-02 at 14 47 37](https://user-images.githubusercontent.com/67231450/135710721-92fb872d-b285-4be8-bbc3-4e8378681384.jpeg "System-Architecture")

---

## Description

**There are Two Major Elements of the Web-App namely Call Team and Bed Allocation Team :** 

**Call Team :**

A call team is generally a squad of 15-20 non-medicos which work 24 hours a day, seven days a week to verify the covid positive patient and collect information which the bot missed. The data is forwarded to the call centre operator via the bot. On their online interface, the data is presented to the team in the form of a table and a QR code. The QR code simplifies their lives because all they have to do is scan it to receive the contact information they need to work. They commence by calling each patient one by one and filling out the contents of the form provided on their web interface in addition to the contact information form. After the patient has been confirmed and all required details such as symptoms, oxygen saturation level, and so on have been collected, the patient is registered into the database and forwarded to the BAT for further process

**Bed Allocation Team (BAT) :**

This is the most crucial section of our pipeline. BAT stands for Bed Allocation Team, and the acronym suggests what this team undertakes. Unlike the call team, the bat team consists of doctors and medical professionals who determine which type of bed (ordinary,  oxygen bed, ICU, etc.) the patient should be assigned. BAT has a web interface where it receives a list of patients from the call centre, checks the availability of beds around the ward, and assigns them to the patient based on their needs. The Dashboard, which indicates the number of beds (of various kinds) vacant in the ward, has been supplied by BAT to monitor the availability of the bed. They are also given facility (hospital) specific data to help them perform more efficiently and quickly.

---

## TechStack
><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://d3js.org/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank">  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank">
 
 ---
 
 ## Getting Started
 1. [**Follow this link to communicate with our whatsapp bot**](http://api.whatsapp.com/send?phone=+1-(415)-523-8886 "Covid-Care-Center")<a href="http://api.whatsapp.com/send?phone=917710914875" target="_blank"><i class="fab fa-whatsapp"></i></a>

- Steps to chat with the bot:
 
 1. Type the following message to activate the bot
 
``` 
  join not-beauty
```
 
 2. Now, if you are looking for a covid bed, just type the below message
```  
  /bed
```

  3. Now, Enter your correct full name
 ```
 < firstName - middleName - lastName >
 ```

  Wait for the confirmation message by the bot for your name, Once the confirmation is received, it asks for your contact number
  
 4. Now, Enter a valid 10 digit contact number
```
XXX-XXX-XXX
```

  All the mentioned details have been recorded by the bot and also displayed to you for a confirmation

 5. If all details are correct, simply type confirm
  
 All the data is being successfully stored in the database of the call team which will call upon the given no as soon as possible

(You Can Refer the below figure if any doubts)
![image](https://user-images.githubusercontent.com/67231450/143731938-f7a61e0a-de62-44b0-b152-22ee19284373.png)

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
