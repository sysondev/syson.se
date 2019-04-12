import React from 'react';
import classNames from 'classnames';
import styles from './Kalkylen.module.css';
class Kalkylen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hourlyRate: 900,
      employmentPercentage: 100,
      sickDays: 10,
      monthlyCosts: 1000,
      extraPension: 0,
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className={styles.container} >
        <div className={styles.inputContainer}>
          <h2 className={styles.title}>Räkna ut din månadslön</h2>
          <div className={styles.inputs}>
            <div>
              <label className={styles.label}>Timpris</label>
              <input name="hourlyRate" type="number" value={this.state.hourlyRate} className={styles.input} onChange={this.handleInputChange} />
            </div>
            <div>
              <label className={styles.label}>Procent av heltid</label>
              <input name="employmentPercentage" type="number" value={this.state.employmentPercentage} className={styles.input} onChange={this.handleInputChange} />
            </div>
            <div>
              <label className={styles.label}>Sjukdagar / Övrig frånvaro</label>
              <input name="sickDays" type="number" value={this.state.sickDays} className={classNames(styles.input, styles.inputSmall)} onChange={this.handleInputChange} />
            </div>
            <div>
              <label className={styles.label}>Övriga månadskostnader</label>
              <input name="monthlyCosts" type="number" value={this.state.monthlyCosts} className={styles.input} onChange={this.handleInputChange} />
              <label className={classNames(styles.label, styles.labelSmall)}>Telefon, tjänstebil, mm</label>
            </div>
            <div>
              <label className={styles.label}>Extra pensionsavsättning</label>
              <input name="extraPension" type="number" value={this.state.extraPension} className={styles.input} onChange={this.handleInputChange} />
              <label className={classNames(styles.label, styles.labelSmall)}>Utöver 2600kr. per månad</label>
            </div>
          </div>
        </div>
        <div className={styles.results}>
          <div className={classNames(styles.result, styles.first)}>
            <span className={styles.resultLabel}>2019 antal dagar</span>
            <span className={styles.resultValue}>253</span>
          </div>
          <div className={classNames(styles.result)}>
            <span className={styles.resultLabel}>Total månadspension</span>
            <span className={styles.resultValue}>2600</span>
          </div>
          <div className={classNames(styles.result, styles.highlight)}>
            <span className={styles.resultLabel}>Månadslön</span>
            <span className={styles.resultValue}>5 miljoner!</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Kalkylen
