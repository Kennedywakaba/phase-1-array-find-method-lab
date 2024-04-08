function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W");
    return winningRecord ? winningRecord.year : undefined;
}

const records = [
    { year: 2000, result: "L" },
    { year: 2001, result: "W" },
    { year: 2002, result: "L" },
    { year: 2003, result: "W" }
];


