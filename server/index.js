/** @format */

const express = require('express');
const app = express();
const db = require('./config/mysql');
const cors = require('cors');

const PORT = 3001;

app.use(cors());
app.use(express.json());

/* GET */
// 抓取全部英雄
app.get('/champions', (req, res) => {
  const sqlSelect =
    'SELECT c.*, t.tname, (SELECT t1.tname from champions c1 LEFT JOIN champion_type ct1 ON c1.cid = ct1.cid LEFT JOIN types t1 ON t1.tid = ct1.tid WHERE ct1.pr_type = 0 AND c1.cid = c.cid) AS tname2 FROM champions c LEFT JOIN champion_type ct ON c.cid = ct.cid LEFT JOIN types t ON t.tid = ct.tid WHERE ct.pr_type = 1 ORDER BY cid';
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success fetch champions');
      res.send(result);
    }
  });
});

// 抓取指定批數的英雄
app.get('/champions/:pageNumber', (req, res) => {
  const pageNumber = req.params.pageNumber;
  const sqlSelect =
    'SELECT * FROM (SELECT c.*, t.tname, (SELECT t1.tname from champions c1 LEFT JOIN champion_type ct1 ON c1.cid = ct1.cid LEFT JOIN types t1 ON t1.tid = ct1.tid WHERE ct1.pr_type = 0 AND c1.cid = c.cid) AS tname2 FROM champions c LEFT JOIN champion_type ct ON c.cid = ct.cid LEFT JOIN types t ON t.tid = ct.tid WHERE ct.pr_type = 1 ORDER BY cid) AS r WHERE r.cid > ( ? * 12 ) LIMIT 12';
  db.query(sqlSelect, [parseInt(pageNumber)], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success fetch champions page');
      res.send(result);
    }
  });
});

// 抓取指定英雄細節
app.get('/champions_detail/id=:id&:name', (req, res) => {
  const cid = req.params.id;
  const sqlSelects = [
    'SELECT * FROM clothes where cid = ? ORDER BY cl_origin desc',
    'SELECT * FROM skills where cid = ?',
    'SELECT sname, s_pr, s_img FROM skills WHERE cid = ? AND c_sid < 5 ORDER BY s_pr asc',
    'SELECT r.* FROM champion_rune cr LEFT JOIN champions c ON cr.cid = c.cid LEFT JOIN runes r ON cr.rid = r.rid WHERE cr.cid = ? ',
    'SELECT t.* FROM champion_type ct LEFT JOIN champions c ON ct.cid = c.cid LEFT JOIN types t ON ct.tid = t.tid WHERE ct.cid = ? ORDER BY pr_type DESC',
    'SELECT sp.* FROM champion_spell csp LEFT JOIN champions c ON csp.cid = c.cid LEFT JOIN spells sp ON csp.sp_id = sp.sp_id WHERE csp.cid = ?',
    'SELECT e.eid, e.ename, (SELECT et.et_name FROM equipments_type et WHERE et.et_id = e.e_type) AS e_type, e_desc, e_img FROM champion_equipment ce LEFT JOIN equipments e ON e.eid = ce.eid WHERE ce.cid = ?',
  ];
  db.query(
    sqlSelects.join(';'),
    [cid, cid, cid, cid, cid, cid, cid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Success fetch champion details');
        // console.log('equip', result[6]);
        res.send(result);
      }
    }
  );
});

// 抓取裝備相關合成
app.get('/champions_detail/:eid', (req, res) => {
  const eid = req.params.eid;
  const sqlSelect =
    'SELECT e.eid, e.ename, e.e_img FROM equipments_branch eb LEFT JOIN equipments e on eb.eid = e.eid WHERE eb.bid = ?';
  db.query(sqlSelect, [eid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success fetch Equipment Branch');
      res.send(result);
    }
  });
});

// 抓取裝備分類
app.get('/equipments', (req, res) => {
  const sqlSelect = 'SELECT et.et_id, et.et_name FROM equipments_type et;';
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success fetch Equipments');
      res.send(result);
    }
  });
});

// 抓取指定種類的裝備
app.get('/equipments/:pageNumber/:category', (req, res) => {
  const category = req.params.category;
  const pageNumber = req.params.pageNumber;
  var selectOption = [parseInt(pageNumber)];
  var sqlSelect = '';
  sqlSelect = `SELECT e.eid, e.ename, (SELECT et.et_name FROM equipments_type et WHERE et.et_id = e.e_type) AS e_type, e_desc, e_img FROM equipments e LEFT JOIN equipments_type et ON et.et_id = e.e_type WHERE e.eid > ( ? * 12 ) ${
    category !== '0' ? 'AND et.et_id = ? ' : ''
  }LIMIT 12`;

  if (category !== '0') {
    selectOption = [parseInt(pageNumber), parseInt(category)];
  }
  db.query(sqlSelect, selectOption, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success fetch Equipment Branch');
      res.send(result);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) console.log(`Cannot listen on PORT: ${PORT}`);
  console.log(`Server is running on PORT: ${PORT}`);
});
