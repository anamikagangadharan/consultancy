import React from "react";
import css from "./Approach.module.css";
import Value from "../../assets/testbox.svg";
import Value2 from "../../assets/testbox2.svg";

const Approach = () => {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <div className={css.div1}>
            <div className={css.line}></div>
            <div className={css.head}>
          <span>Our Design and Development approach</span>
        </div>
        </div>
      
        <div className={css.div2}>
            {/* set1 */}
          <div className={css.bset}>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={Value2} alt="" />
              </div>
              <div className={css.boxright}>
                <span>REQUIREMENT GATHERING</span>
                <span>Understanding your needs is our top priority. We meticulously document requirements, creating a robust software project base.</span>
              </div>
            </div>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={Value} alt="" />
              </div>
              <div className={css.boxright}>
                <span>Value for money</span>
                <span>
                  We believe in providing the best bang for your buck. Our
                  services not only deliver top-notch results but also offer
                  cost-effective solutions, maximizing your return on
                  investment.
                </span>
              </div>
            </div>
          </div>

            {/* set2 */}
          <div className={css.bset}>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={Value2} alt="" />
              </div>
              <div className={css.boxright}>
                <span>REQUIREMENT GATHERING</span>
                <span>Understanding your needs is our top priority. We meticulously document requirements, creating a robust software project base.</span>
              </div>
            </div>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={Value} alt="" />
              </div>
              <div className={css.boxright}>
                <span>Value for money</span>
                <span>
                  We believe in providing the best bang for your buck. Our
                  services not only deliver top-notch results but also offer
                  cost-effective solutions, maximizing your return on
                  investment.
                </span>
              </div>
            </div>
          </div>

            {/* set3 */}
          <div className={css.bset}>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={Value2} alt="" />
              </div>
              <div className={css.boxright}>
                <span>REQUIREMENT GATHERING</span>
                <span>Understanding your needs is our top priority. We meticulously document requirements, creating a robust software project base.</span>
              </div>
            </div>
            <div className={css.box}>
              <div className={css.boxleft}>
                <img src={Value} alt="" />
              </div>
              <div className={css.boxright}>
                <span>Value for money</span>
                <span>
                  We believe in providing the best bang for your buck. Our
                  services not only deliver top-notch results but also offer
                  cost-effective solutions, maximizing your return on
                  investment.
                </span>
              </div>
            </div>
          </div>



        </div>
     
      </div>
    </div>
  );
};

export default Approach;
