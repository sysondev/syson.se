import React from 'react';
import classNames from 'classnames';
import styles from './Kalkylen.module.css';
import { calculateSalary, DEFAULT_VALUES } from './salary'
class Kalkylen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hourlyRate: DEFAULT_VALUES.HOURLY_RATE,
      sickDays: DEFAULT_VALUES.SICK_DAYS,
      extraVacationDays: DEFAULT_VALUES.EXTRA_VACATION_DAYS,
      otherMonthlyCosts: DEFAULT_VALUES.OTHER_MONTHLY_COSTS,
      extraPension: DEFAULT_VALUES.EXTRA_PENSION,
    };
  }

  setSalary = () => {
    const salary = calculateSalary(this.state)
    this.setState({
      salary
    })
  }

  getTotalPension = () => DEFAULT_VALUES.DEFAULT_PENSION + this.state.extraPension

  componentDidMount() {
    this.setSalary()
  }

  handleInputChange = e => {
    const value = e.target.value

    if (value === '') {
      this.setState({
        [e.target.name]: ''
      }, this.setSalary)
    } else if (value >= 0) {
      this.setState({
        [e.target.name]: parseInt(e.target.value)
      }, this.setSalary)
    }
  }

  handleFocus = e => e.target.select();

  render() {
    return (
      <div className={styles.container} >
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
            <div>
              <label className={styles.label}>Timpris</label>
              <input name="hourlyRate" type="number" value={this.state.hourlyRate} className={styles.input} onChange={this.handleInputChange} onFocus={this.handleFocus} />
              <label className={classNames(styles.label, styles.labelSmall)}>Ditt pris mot kund</label>
            </div>
            <div>
              <label className={styles.label}>Sjukdagar / Utan uppdrag</label>
              <input name="sickDays" type="number" value={this.state.sickDays} className={classNames(styles.input)} onChange={this.handleInputChange} onFocus={this.handleFocus} />
              <label className={classNames(styles.label, styles.labelSmall)}>per år</label>
            </div>
            <div>
              <label className={styles.label}>Extra semesterdagar</label>
              <input name="extraVacationDays" type="number" value={this.state.extraVacationDays} className={classNames(styles.input)} onChange={this.handleInputChange} onFocus={this.handleFocus} />
              <label className={classNames(styles.label, styles.labelSmall)}>Utöver 30 dagars semester</label>
            </div>
            <div>
              <label className={styles.label}>Övriga kostnader</label>
              <input name="otherMonthlyCosts" type="number" value={this.state.otherMonthlyCosts} className={styles.input} onChange={this.handleInputChange} onFocus={this.handleFocus} />
              <label className={classNames(styles.label, styles.labelSmall)}>Telefon, mm. per månad</label>
            </div>
            <div>
              <label className={styles.label}>Extra pensionsavsättning</label>
              <input name="extraPension" type="number" value={this.state.extraPension} className={styles.input} onChange={this.handleInputChange} onFocus={this.handleFocus} />
              <label className={classNames(styles.label, styles.labelSmall)}>Utöver 2600kr. per månad</label>
            </div>
          </div>
        </div>
        <div className={styles.results}>
          <div className={classNames(styles.result)}>
            <span className={styles.resultLabel}>Månadspension</span>
            <span className={styles.resultValue}>{this.getTotalPension()} kr</span>
          </div>
          <div className={classNames(styles.result, styles.highlight)}>
            <span className={styles.resultLabel}>Månadslön</span>
            <span className={styles.resultValue}><b>{this.state.salary} kr</b></span>
          </div>
        </div>
      </div>
    );
  }
};

export default Kalkylen
