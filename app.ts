#! /usr/bin/env node 
import inquirer from "inquirer"

let todo_list: string[]= [];

let while_condition: boolean = true;

while (while_condition == true){

//-----------------------Options------------------------------ 

let Option = await inquirer.prompt({
    type: 'list',
    name: 'user_option',
    message: 'Select an option: ',
    choices: ["Add" , "Remove"]

})

//------------------------Add------------------------------ 
if(Option.user_option === 'Add'){

    let ans = await inquirer.prompt([{
        type: 'input',
        name: 'user_ans',
        message: 'Write something to add in the task list: ',

    }])

    if(ans.user_ans !== ""){
        todo_list.push(ans.user_ans);            //push method is used to add something in the array
        console.log(todo_list);
    }

else{
    console.log("Please write something to add in the todo list");
}
}

//------------------------Remove------------------------------ 
else if(Option.user_option === 'Remove'){

    let removeChoice = await inquirer.prompt([{
        type: 'list',
        name: 'remove_item',
        message: 'Select item to removed: ',
        choices: todo_list,

    }]);

    let index_to_remove = todo_list.indexOf(removeChoice.remove_item);
    if(index_to_remove >= 0){

        todo_list.splice(index_to_remove, 1);
        console.log(' You removed : ', removeChoice.remove_item);
        console.log(todo_list);
       }
    }
//------------------------Confirmation------------------------------ 

let user_ans = await inquirer.prompt([{
     
    type: 'confirm',
    name: 'selection',
    message: 'Do you want to continue? ',
    default: true

}])
 
if (user_ans.selection === false){

    while_condition = false;
}
}

console.log(`Thankyou for using to do list `);
