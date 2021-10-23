const nodemailer = require('nodemailer');

function generateOrderEmail ({ order, total }) {
  return `<div>
  <h2>Your Recent orrder ${total}</h2>
  <p>pleaes meet order</p>
  <ul>
    ${order.map(item => `<li>
      <img src=`${item.thumbnail}` alt=`${item.name}`/>
      ${item.size} ${item.name} - ${item.price}    
    </li>`)}
</ul>
<p>Your total is $${total} due</p>
</div>
`;
}

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const requiredFields = ['email', 'name', 'order'];
  for ( const field of requiredFields ) {
    if ( !body[field] ) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! you missing the ${field} field`,
        }),
      };
    }
  }
  // Test send an email
  const info = await transporter.sendMail({
    from: 'Slicks Slices <slick@example.com',
    to: `${body.name} ${body.email}, orders@example.com`,
    subject: 'new order',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  console.log(info);
  return {
    statusCode: 200,
    body: JSON.stringify({ message:'Success' }),
  };
};
