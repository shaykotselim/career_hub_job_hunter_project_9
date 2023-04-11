// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = getAppliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

// const removeFromDb = id => {
//     const appliedJob = getappliedJob();
//     if (id in appliedJob) {
//         delete appliedJob[id];
//         localStorage.setItem('applied-job', JSON.stringify(appliedJob));
//     }
// }

const getAppliedJob = () => {
    let appliedJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        appliedJob = JSON.parse(storedCart);
    }
    return appliedJob;
}

// const deleteappliedJob = () => {
//     localStorage.removeItem('shopping-cart');
// }

export {
    addToDb,
    // removeFromDb,
    getAppliedJob,
    // deleteappliedJob
}