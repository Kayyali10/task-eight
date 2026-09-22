let name = prompt("please enter your name:");

function handlemembershiptype() {

    let membership = prompt("please enter your membership type: student/regular");

    while (membership != "student" && membership != "regular") {

        membership = prompt("please enter your membership type: student/regular");

    }
   return membership ;
}

function collectalluserdata () {

    let membership =handlemembershiptype();

    let typebook = prompt("please enter your type book: fiction /non-fiction ");

    let titlebook = prompt("please enter specific title of the book");

    let sum = [name, membership, typebook, titlebook];

    for (let i = 0; i < sum.length; i++) {

        console.log(sum[i])
    }
}

collectalluserdata();

