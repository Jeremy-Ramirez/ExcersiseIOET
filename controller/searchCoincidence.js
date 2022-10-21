
const searchCoincidence = (employees) => {

    for (let i = 0; i < employees.length; i++) {

        const schedulei = employees[i].schedule; //Schedule String   
        const arrayschedulei = schedulei.split(','); // Array of the first element on the iteration      

        for (let j = i + 1; j < employees.length; j++) {

            const schedulej = employees[j].schedule;
            const arrayschedulej = schedulej.split(','); // Array of the second element of the iteration
            const resp = arrayschedulei.map((val) => arrayschedulej.filter(subval => subval === val).length);// Array with the number of coincidence
            const totalc = resp.reduce((prev, act) => prev + act, 0);

            console.log(`${employees[i].name}-${employees[j].name.trimStart()}: ${totalc.toString().trimEnd()}`);

        }

    }

}

module.exports = {
    searchCoincidence
}