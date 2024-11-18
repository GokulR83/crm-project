# Project Description
 **Contact Management** feature helps users of the system to keep a track of important contact
 information of customers / clients. It lets users add, view, update, and delete contact details all in
 one place. This makes it easy for users to find and manage information, which is especially
 helpful in a business setting where keeping track of relationships is key.
 For example, users can quickly find contact information, update it if anything changes, delete old
 contacts or add new contacts. Having all this information in one organized space saves time and
 keeps everything accessible, helping users build and maintain strong relationships.

## Use Cases:
 - **Adding a New Contact**: Users should be able to add a contact with essential details like
 name, email, phone number, company and job title. This allows users to add new
 customers.
 - **Viewing Contacts**: A table view should list all contacts, with sorting and pagination
 options to make large contact lists easier to browse. This lets users efficiently locate any
 contact's information.
- **Editing Contact Information**: Users can update contact details when information
 changes, such as a new phone number or company. Keeping data current ensures
 effective communication and reliable records.
- **Deleting a Contact**: Users may need to remove outdated or duplicate entries, helping
 them keep their contact list clean and relevant.


## How this Application Works

- when you entered the application there will a table which showcase all the data present inside the db
  - **add button** -> you can add the contact details by clicking the add button
  - **edit button** -> edit button is presented for the each entries, so you can easily modify the contact details
  - **delete button** -> you can easily delete the contact , that you don't want
  - **page button** -> is there to achieve the pagination , you go any number of page and you can see the contact entries ( it improve the performance of the application)
  - **sort dropdown button** -> you can sort the data based on option that provided in dropdown

## Need to Improve and Include
- developing a better UI
- error handling in much better way
- providing authentication and authorization
- validate the input field in the front end
- responsiveness of the application

## Major Technical Decision
### frontend
- I have used the **react toast library** for showing actions, whichever happens during the use of app
- used the **donenv** library to give the dynamic data to the front-end of the application
### backend
- I have used **mongoDB atlas cloud database** which is free tire and free to host on cloud and MongoDB was chosen because of its flexibility, scalability, and ease of use for CRUD operations. The schema-less design of MongoDB makes it ideal for applications where the data structure may change over time, such as a CRM system. Additionally, its ability to scale horizontally and its support for indexing ensures that the application can efficiently handle large datasets as the system grows.
- for dynamic data i have used the **dotenv**.

## Challenges I have Faced
**Backend**
***Issues faced***
- when updating the contact details , i have a faced a little issue, what if i trying to update the contact details which is already there in another contact => for that i have checked where there is same email and phone number present in the db -> in this case i have encountered if im updating my contact without modifying the email and phone number it will show details already exists so, i cant able to update the any details

***Resolved approach***
 - what i have did is : first i have fetched the details of update contact id and i fetched the contact using email or phone number , then i compared if its equal means we are updating the same data else, we are trying update the duplicate details (repeated entry => email or phoneNumber which already present in other contact)

***Front-End***
-  for me its new to create a component using **MUI** , I have learned many things while im working on a project and i have faced difficulty while customizing the component and im able to figure it out and i have focused on core working of the project and i need to improve the designs of the UI.


## Provide Feedback
I hope this message finds you well. I am writing to kindly request your valuable feedback on my project and overall work. Your insights and suggestions would greatly help me to improve and grow further.

If you have any suggestions, comments, or questions, please feel free to reach out to us at:

📧 **[withgokul@gmail.com](mailto:withgokul@gmail.com)**

Thank you for taking the time to share your feedback!#