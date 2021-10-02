
function populateRightDiv(id,patients){
    // Remove Childrens in Symptoms and commorbidities
    $('#symptoms').empty();
    $('#comorbidities').empty();

    // Remove Classes
    $('#home_quarantine').removeClass('btn-success');
    $('#home_quarantine').removeClass('btn-danger');

    let key;
    for(let i = 0;i < patients.length;i++){
        if(patients[i]._id === id){
           key = i;
           break;
        }
    }
    // Name
    $('#patient_name').text(patients[key].firstname + patients[key].lastname);

    // Address
    $('#address').text(patients[key].address);

    //Contact
    $('#contact').text(patients[key].contact);

    // Emergency Contact
    $('#emergency_contact').text(patients[key].emergency_contact);

    // Age
    let today = new Date();
    let userDob = new Date(patients[key].date_of_birth);
    let age = parseInt(today.getFullYear()) - parseInt(userDob.getFullYear());
    $('#age').html(`Age-${age}`);
    
    // Gender
    $('#gender').html(patients[key].gender);
    
    // Symptoms
    for(let i = 0;i < patients[key].symptoms.length;i++){
        $('#symptoms').append(`<button class="specs btn btn-warning">${patients[key].symptoms[i]}</button>`);
    }

    // Comorbidities
    for(let i = 0;i < patients[key].comorbidities.length;i++){
        $('#comorbidities').append(`<button class="spec btn">${patients[key].comorbidities[i]}</button>`);
    }
    
    // O2 Level
    $('#o2Level').text(patients[key].o2_saturation_level);

    // Quarantine 
    if(patients[key].home_quarantine) {
        $('#home_quarantine').addClass('btn-success');
        $('#home_quarantine').html('Home Quarantine Possible');
    }
    else {
        $('#home_quarantine').addClass('btn-danger');
        $('#home_quarantine').html('Home Quarantine Not Possible');
    }
     
    // Add patient id in hidden input tag in modal
    $('#patient_id').val(id);


}