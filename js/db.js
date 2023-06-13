const db = require('./db');

// דוגמה לקריאת פרטי קמפיין מה-DB
app.get('/campaign/:id', (req, res) => {
  const campaign = db.getCampaign(req.params.id);
  if (campaign) {
    console.log('פרטי הקמפיין:', campaign);
    res.json(campaign);
  } else {
    console.error('לא נמצא קמפיין עם המזהה שצוין');
    res.status(404).json({ error: 'לא נמצא' });
  }
});

// דוגמה לעדכון יעד של המצ'ינג על ידי מנהל הקמפיין
app.put('/campaign/:id/target', (req, res) => {
  if (req.body.target && req.body.isAdmin) {
    db.updateCampaignTarget(req.params.id, req.body.target);
    console.log('עודכן יעד של המצ\'ינג');
    res.json({ success: true });
  } else {
    console.error('אין הרשאות מתאימות לעדכון המצ\'ינג');
    res.status(403).json({ error: 'אין הרשאות' });
  }
});

// דוגמה לקריאת המתרימים התרומות שהם השיגו מה-DB
app.get('/donor/:id/donations', (req, res) => {
  const donations = db.getDonorDonations(req.params.id);
  if (donations) {
    console.log('התרומות השיגו המתרים:', donations);
    res.json(donations);
  } else {
    console.error('לא נמצאו תרומות למתרים שצוין');
    res.status(404).json({ error: 'לא נמצאו תרומות' });
  }
});
