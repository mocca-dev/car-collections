export default function handler(req, res) {
  const { id } = req.query;
  const me = {
    name: 'John Doe',
    at: 'John_Doe1',
    picURL: '',
    status: {
      followers: '4K',
      following: '1.1K',
      cars: '4',
    },
    collection: [
      { description: 'Audi RS5 2120', userName: 'Shmee150' },
      { description: 'Audi RS5 2021', userName: 'Toneko' },
      { description: 'Audi RS5 2022', userName: 'Juancito' },
      { description: 'Audi RS5 2023', userName: 'Pepito' },
    ],
  };

  const other = {
    name: 'Tim Burton',
    at: 'Shmee150',
    picURL:
      'https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/121532074_197922715034048_8600646683824358066_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8CDk-2DCINQAX8DsX7T&tn=1QpVukI6VIQTgodt&_nc_ht=scontent.faep9-1.fna&oh=00_AfCs3DZ_TfCkLE1zv2uzy_r-EshgoIP6KWlEYREB1J3GOQ&oe=63E43324',
    status: {
      followers: '45K',
      following: '10K',
      cars: '10',
    },
    collection: [
      { description: 'Audi RS5 2120', userName: 'Shmee150' },
      { description: 'Audi RS5 2021', userName: 'Toneko' },
      { description: 'Audi RS5 2022', userName: 'Juancito' },
      { description: 'Audi RS5 2023', userName: 'Pepito' },
    ],
  };

  if (id === '0') {
    res.status(200).json(me);
  } else {
    res.status(200).json(other);
  }
}
