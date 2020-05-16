import React from 'react';

class Contact extends React.Component {

  formatDate(date) {
    const [year, month, day, ...rest] = date.split("T")[0].split("-")
    console.log(year,month, day)
    return `${day}/${month}/${year}`
  }

  render() {
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={this.props.data.avatar} alt={this.props.data.avatar}/>
        </span>
        <span className="contact__data" data-testid="contact-name">{this.props.data.name}</span>
        <span className="contact__data" data-testid="contact-phone">{this.props.data.phone}</span>
        <span className="contact__data" data-testid="contact-country">{this.props.data.country}</span>
        <span className="contact__data" data-testid="contact-date">{this.formatDate(this.props.data.admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{this.props.data.company}</span>
        <span className="contact__data" data-testid="contact-department">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;