const fs = require("fs");
const fileUrl = "./my-agora-states-server/repository/discussions.json";
const discussionsData = fs.readFileSync(fileUrl, "utf-8");
const datas = JSON.parse(discussionsData);

const discussionsController = {
  findAll: (req, res) => {
    const discussionsData = fs.readFileSync(fileUrl, "utf-8");
    const datas = JSON.parse(discussionsData);
    return res.status(200).json(datas);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filteredData = discussionsData.filter(
      (item) => item.id === Number(id)
    );
    if (filteredData.length === 0) {
      return res.status(404).send();
    } else return res.status(200).send(filteredData[0]);
  },

  create: (req, res) => {
    const data = req.body;
    console.log(data);
    datas.unshift(data);
    fs.writeFile(fileUrl, JSON.stringify(datas), (err) => {
      if (err) return res.status(201).json("에러입니다");
      else {
        let responseData = datas;
        return res.status(201).json(responseData);
      }
    });
  },
};

module.exports = {
  discussionsController,
};
