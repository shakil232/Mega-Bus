// shortcut...
const TicketChangeHandler = (ticket , isIncrease) =>{
    const TicketInput = document.getElementById(ticket +'-input') ;
    const TicketCount = parseInt(TicketInput.value) ;
    
    let TicketNewCount = TicketCount ;
    if(isIncrease === true){
        TicketNewCount = TicketCount +1 ;
    }
    if(isIncrease === false && TicketCount >0){
        TicketNewCount = TicketCount -1 ;
    }
    TicketInput.value = TicketNewCount ;

    let totalPrice = 0 ;
    if(ticket === 'first'){
        totalPrice = TicketNewCount*150 ;
    }
    if(ticket === 'economy'){
        totalPrice = TicketNewCount*100 ;
    }
    document.getElementById(ticket +'-price').innerText= '$' +totalPrice ;
    calculation()
}
 
// Grandcalculation,..
const calculation = () =>{
    // const firstInput = document.getElementById('first-input') ;
    // const firstClassCount = parseInt(firstInput.value) ;

    // const economyInput = document.getElementById('economy-input') ;
    // const economyClassCount = parseInt(economyInput.value) ;
    
    const firstClassCount = getInput('first');
    const economyClassCount = getInput('economy');

    const totalAmount = firstClassCount *150  + economyClassCount *100  ;
    document.getElementById('total-amount').innerText =  '$' +totalAmount 

    const tex = totalAmount *.1 ;
    document.getElementById('tex').innerText = '$' +tex ;

    const GrandTotal = totalAmount + tex ;
    document.getElementById('grand-total').innerText = '$' +GrandTotal ;
}
const getInput = (inputs) =>{
    const ticketInput = document.getElementById(inputs +'-input') ;
    const ticketCount = parseInt(ticketInput.value) ;
    return ticketCount;
}
// booking confim shows...
const getBooking = () =>{
    document.getElementById('front-page').style.display = 'none' ;
    document.getElementById('confirm-area').style.display = 'block ';

    const firstInput= document.getElementById('first-input') ;
    const firstNumber = parseInt(firstInput.value) ;
    firstNewNumber = firstNumber ;

    const economyInput= document.getElementById('economy-input') ;
    const economyNumber = parseInt(economyInput.value) ;
    economyNewNumber = economyNumber ;

    const totalCost = firstNewNumber *150 + economyNewNumber *100 ;
    const tex = totalCost *.1 ;
    const grandCost = totalCost + tex ;
    document.getElementById('confirm-first').innerText =  firstNewNumber ;
    document.getElementById('confirm-economy').innerText = economyNewNumber ;
    document.getElementById('total-cost').innerText = '$'+grandCost ;
}
const backHomePage = () =>{
    document.getElementById('front-page').style.display = 'block' ;
    document.getElementById('confirm-area').style.display = 'none';
}

// // firstClassHandler...
// const firstClassChangeHandler = (isIncrease) =>{
//     const firstClassInput = document.getElementById('first-input') ;
//     const firstClassCount = parseInt(firstClassInput.value) ;
    
//     let firstClassNewCount = firstClassCount ;
//     if(isIncrease === true){
//         firstClassNewCount = firstClassCount +1 ;
//     }
//     if(isIncrease === false && firstClassCount >0){
//         firstClassNewCount = firstClassCount -1 ;
//     }

//     firstClassInput.value = firstClassNewCount ;
//     const totalPrice = firstClassNewCount *150 ;
//     document.getElementById('first-price').innerText= '$' +totalPrice ;
// }

// // EconomyClassHandler....
// const economyClassChangeHandler = (isIncrease) =>{
//     const firstClassInput = document.getElementById('economy-input') ;
//     const firstClassCount = parseInt(firstClassInput.value) ;
    
//     let firstClassNewCount = firstClassCount ;
//     if(isIncrease === true){
//         firstClassNewCount = firstClassCount +1 ;
//     }
//     if(isIncrease === false && firstClassCount >0){
//         firstClassNewCount = firstClassCount -1 ;
//     }

//     firstClassInput.value = firstClassNewCount ;
//     const totalPrice = firstClassNewCount *100 ;
//     document.getElementById('economy-price').innerText= '$' +totalPrice ;
// }
