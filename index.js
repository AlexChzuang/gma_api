fetch("/music.json")
  .then((res) => {
    const data = res.json();
    return data;
  })
  .then((data) => {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let newRecord = document.createElement("div")
      newRecord.className = "infoMovie"
      document.querySelector(".record-list").appendChild(newRecord)

      let newRecordInfo = `
        <a href="${data[i].PageUrl}" target="_blank"><h3>${data[i].Subject}</h3></a>
      `
      newRecord.innerHTML = newRecordInfo
    }
  })
