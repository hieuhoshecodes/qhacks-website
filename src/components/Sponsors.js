import React from "react";
import ActionButton from "./ActionButton";
import SponsorLink from "./SponsorLink";
import tucows from "../assets/img/tucows.svg";
import kds from "../assets/img/kingsDistributed.svg";
import sunlife from "../assets/img/sunlife.svg";
import consensys from "../assets/img/consensys.svg";
import loopio from "../assets/img/loopio.svg";
import ratehub from "../assets/img/ratehub.svg";
import scotiabank from "../assets/img/scotiabank.svg";
import td from "../assets/img/td.svg";
import balsamiq from "../assets/img/balsamiq.svg";
import launchAcademy from "../assets/img/launchAcademy.svg";
import ritual from "../assets/img/ritual.svg";
import wakeups from "../assets/img/wakeups.svg";
import wolfram from "../assets/img/wolfram.svg";
import sketch from "../assets/img/sketch.svg";
import qic from "../assets/img/qic.svg";
import mmie from "../assets/img/mmie.svg";

const Sponsors = () => (
  <div
    id="sponsors"
    css={{
      backgroundColor: "#f8f8f8",
      " img": {
        padding: "20px",
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <div
      css={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        paddingTop: "80px",
        maxWidth: "1000px",
        "@media(max-width: 850px)": {
          paddingLeft: "20px",
          paddingRight: "20px",
          " >div": {
            gridTemplateColumns: "1fr"
          }
        }
      }}
    >
      <h1>Sponsors</h1>
      {/* Terra */}
      <div
        css={{
          paddingTop: "56px",
          display: "block"
        }}
      >
        <SponsorLink url="https://tucows.com">
          <img
            src={tucows}
            css={{ width: "70%" }}
            data-cy="test-sponsor-image"
          />
        </SponsorLink>
      </div>
      {/* Giga */}
      <div
        css={{
          paddingTop: "50px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        <SponsorLink url="https://kingsds.network">
          <img css={{ width: "80%" }} src={kds} />
        </SponsorLink>
        <SponsorLink url="https://sunlife.ca">
          <div
            css={{
              position: "relative",
              padding: "20px"
            }}
          >
            <img
              css={{
                width: "100%"
              }}
              src={sunlife}
            />
          </div>
        </SponsorLink>
      </div>
      {/* Mega */}
      <div css={{ paddingTop: "75px" }}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            "@media(max-width: 850px)": {
              gridTemplateColumns: "1fr"
            }
          }}
        >
          <div css={{ width: "100%" }}>
            <SponsorLink url="https://consensys.net/">
              <img src={consensys} css={{ width: "100%" }} />
            </SponsorLink>
          </div>
          <SponsorLink url="https://td.ca">
            <img src={td} css={{ width: "45%" }} />
          </SponsorLink>
          <div>
            <SponsorLink url="https://ratehub.ca">
              <img src={ratehub} css={{ width: "100%" }} />
            </SponsorLink>
          </div>
        </div>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          "@media(max-width: 850px)": {
            gridTemplateColumns: "1fr"
          }
        }}
      >
        <div>
          <SponsorLink url="https://scotiabank.ca">
            <img src={scotiabank} css={{ width: "100%" }} />
          </SponsorLink>
        </div>
        <div css={{ " img": { width: "65%" } }}>
          <SponsorLink url="https://loopio.com">
            <img src={loopio} />
          </SponsorLink>
        </div>
      </div>
      {/* Start-ups */}
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          paddingTop: "50px",
          "@media(max-width: 850px)": {
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto"
          }
        }}
      >
        <SponsorLink url="https://balsamiq.com">
          <img src={balsamiq} css={{ width: "80%" }} />
        </SponsorLink>
        <SponsorLink url="https://wolfram.com/language/">
          <img src={wolfram} css={{ width: "80%" }} />
        </SponsorLink>
        <SponsorLink url="https://ritual.co">
          <img src={ritual} css={{ width: "100%" }} />
        </SponsorLink>
        <SponsorLink url="https://wake-ups.com">
          <img src={wakeups} css={{ width: "50%" }} />
        </SponsorLink>
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <SponsorLink url="https://sketchapp.com">
          <img src={sketch} css={{ width: "100%" }} />
        </SponsorLink>
        <SponsorLink url="https://www.launchacademy.ca/">
          <img src={launchAcademy} css={{ width: "100%" }} />
        </SponsorLink>
      </div>
      <div css={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <h1 css={{ paddingBottom: "48px" }}>Our Partners</h1>
        <p
          css={{
            fontWeight: "bold",
            color: "#c81c2e",
            paddingBottom: "24px",
            ">a": {
              color: "#c81c2e",
              textDecoration: "underline",
              ":hover": { textDecoration: "none" }
            }
          }}
        >
          Interested in partnering? Contact us at{" "}
          <a
            data-cy="partners-email-prompt"
            href="mailto:partnership@qhacks.io"
          >
            partnership@qhacks.io
          </a>
        </p>
        <ActionButton
          backgroundColor="#f8f8f8"
          foregroundColor="#c81c2e"
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            margin: "0 auto"
          }}
          type="rounded"
        >
          Become a partner
        </ActionButton>
      </div>
      {/* School */}
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          paddingBottom: "100px"
        }}
      >
        <SponsorLink url="https://queensu.ca/innovationcentre/">
          <img src={qic} css={{ width: "100%" }} />
        </SponsorLink>
        <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
          <img src={mmie} css={{ width: "100%" }} />
        </SponsorLink>
      </div>
    </div>
  </div>
);

export default Sponsors;