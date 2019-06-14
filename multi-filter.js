const multiFilter = (arr, filters) => {
  const filterKeys = Object.keys(filters);
  return arr.filter(eachObj =>
    filterKeys.every(
      eachKey => eachObj[eachKey].toString().indexOf(filters[eachKey]) > -1
    )
  );
};

const mockData = [
  {
    date: "10/8/2018 @ 2:35pm",
    cid: 12345,
    displayName: "Some Product",
    actionCode: 0,
    actionName: "Test Name",
    actionDescription: "Changed Name",
    user: "Mark"
  },
  {
    date: "10/7/2018 @ 12:01pm",
    cid: 23456,
    displayName: "Another Product",
    actionCode: 0,
    actionName: "Broke Something",
    actionDescription: "Changed Name",
    user: "Brayden"
  },
  {
    date: "4/16/2018 @ 8:22pm",
    cid: 34567,
    displayName: "This Product",
    actionCode: 0,
    actionName: "Stuff Name",
    actionDescription: "Changed Name",
    user: "Tom"
  },
  {
    date: "1/7/2017 @ 9:31am",
    cid: 45678,
    displayName: "That Product",
    actionCode: 0,
    actionName: "Fixed Something",
    actionDescription: "Changed Name",
    user: "Mark"
  },
  {
    date: "10/8/2018 @ 2:35pm",
    cid: 56789,
    displayName: "Some Product",
    actionCode: 0,
    actionName: "Test Name",
    actionDescription: "Changed Name",
    user: "Mark"
  },
  {
    date: "10/7/2018 @ 12:01pm",
    cid: 10001,
    displayName: "Another Product",
    actionCode: 0,
    actionName: "Broke Something",
    actionDescription: "Changed Name",
    user: "Brayden"
  },
  {
    date: "4/16/2018 @ 8:22pm",
    cid: 11225,
    displayName: "This Product",
    actionCode: 0,
    actionName: "Stuff Name",
    actionDescription: "Changed Name",
    user: "Tom"
  },
  {
    date: "1/7/2017 @ 9:31am",
    cid: 22233,
    displayName: "That Product",
    actionCode: 0,
    actionName: "Fixed Something",
    actionDescription: "Changed Name",
    user: "Mark"
  }
];

const filters = {
  displayName: "Some",
  cid: ""
};

// console.log('*****************')
console.log(multiFilter(mockData, filters));
