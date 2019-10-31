import React from "react";
import "../styles/footer.css";
import "../styles/utility.css";
import footerPicture1 from "../assets/about-pic-1.jpg";
import footerPicture2 from "../assets/about-pic-2.jpg";
// import styled from "styled-components";
// const FooterDiv = styled.div`
//   display: flex;
//   width: 100%;
//   margin: 5% 0 2% 0;
//   align-items: center;
//   text-align: center;
//   justify-content: center;
//   font-weight: 500;
//   font-family: Ubuntu;
//   font-size: 1.6rem;
//   color: #2d728f;
//   div {
//     display: flex;
//     align-items: center;
//     text-align: center;
//     font-size: 1.6rem;
//     a {
//       text-decoration: none;
//       color: #2d728f;
//       :hover {
//         color: #26bcd7;
//       }
//     }
//   }
//   .line {
//     margin: 0 5px 0 5px;
//   }
//   @media (max-width: 894px) {
//     width: 70%;
//     flex-direction: column;
//     .copyright {
//       margin-bottom: 1%;
//     }
//     .first {
//       display: none;
//     }
//   }
//   @media (max-width: 576px) {
//     .copyright {
//       width: 103%;
//     }
//   }
// `;

const CopyrightFooter = () => {
  return (
    <>
      <div className="footerDiv">
        <p className="copyright">
          &#169; 2019 How's The Water Inc. All Rights Reserved
        </p>
        <div className="textContainer">
          <p className="line first">|</p>
          <a className="textA" href="#popup-footer">
            Terms + Conditions
          </a>
          <p className="line">|</p>
          <a className="textA" href="#popup-footer">
            Privacy Policy
          </a>
          <p className="line">|</p>
          <a className="textA" href="#popup-footer">
            Legal Statement
          </a>
        </div>
      </div>
      <div className="popup" id="popup-footer">
        <div className="popup-content">
          <div className="popup-left">
            <img
              src={footerPicture1}
              alt="A person relaxing"
              className="popup-img"
            />
            <img
              src={footerPicture2}
              alt="A person surfing"
              className="popup-img"
            />
          </div>
          <div className="popup-right">
            <a href="#section-about" className="popup-close">
              &times;
            </a>
            <div className="popup-text">
              <h2 className="heading-secondary">Terms & Conditions</h2>
              <p className="paragraph">
                These terms and conditions (&quot;Terms&quot;,
                &quot;Agreement&quot;) are an agreement between Website Operator
                (&quot;Website Operator&quot;, &quot;us&quot;, &quot;we&quot; or
                &quot;our&quot;) and you (&quot;User&quot;, &quot;you&quot; or
                &quot;your&quot;). This Agreement sets forth the general terms
                and conditions of your use of the{" "}
                <a
                  target="_blank"
                  rel="nofollow"
                  href="http://howsthewaters.com"
                >
                  howsthewaters.com
                </a>{" "}
                website and any of its products or services (collectively,
                &quot;Website&quot; or &quot;Services&quot;).
                <br></br> <br></br>
                <h2>User content</h2>
                <p>
                  We do not own any data, information or material
                  (&quot;Content&quot;) that you submit on the Website in the
                  course of using the Service. You shall have sole
                  responsibility for the accuracy, quality, integrity, legality,
                  reliability, appropriateness, and intellectual property
                  ownership or right to use of all submitted Content. We may,
                  but have no obligation to, monitor and review Content on the
                  Website submitted or created using our Services by you. Unless
                  specifically permitted by you, your use of the Website does
                  not grant us the license to use, reproduce, adapt, modify,
                  publish or distribute the Content created by you or stored in
                  your user account for commercial, marketing or any similar
                  purpose. But you grant us permission to access, copy,
                  distribute, store, transmit, reformat, display and perform the
                  Content of your user account solely as required for the
                  purpose of providing the Services to you. Without limiting any
                  of those representations or warranties, we have the right,
                  though not the obligation, to, in our own sole discretion,
                  refuse or remove any Content that, in our reasonable opinion,
                  violates any of our policies or is in any way harmful or
                  objectionable.
                </p>
                <br></br> <br></br>
                <h2>Backups</h2>
                <p>
                  We perform regular backups of the Website and Content,
                  however, these backups are for our own administrative purposes
                  only and are in no way guaranteed. You are responsible for
                  maintaining your own backups of your data. We do not provide
                  any sort of compensation for lost or incomplete data in the
                  event that backups do not function properly. We will do our
                  best to ensure complete and accurate backups, but assume no
                  responsibility for this duty.
                </p>
                <br></br> <br></br>
                <h2>Links to other websites</h2>
                <p>
                  Although this Website may link to other websites, we are not,
                  directly or indirectly, implying any approval, association,
                  sponsorship, endorsement, or affiliation with any linked
                  website, unless specifically stated herein. Some of the links
                  on the Website may be &quot;affiliate links&quot;. This means
                  if you click on the link and purchase an item, Website
                  Operator will receive an affiliate commission. We are not
                  responsible for examining or evaluating, and we do not warrant
                  the offerings of, any businesses or individuals or the content
                  of their websites. We do not assume any responsibility or
                  liability for the actions, products, services, and content of
                  any other third-parties. You should carefully review the legal
                  statements and other conditions of use of any website which
                  you access through a link from this Website. Your linking to
                  any other off-site websites is at your own risk.
                </p>
                <br></br> <br></br>
                <h2>Prohibited uses</h2>
                <p>
                  In addition to other terms as set forth in the Agreement, you
                  are prohibited from using the Website or its Content: (a) for
                  any unlawful purpose; (b) to solicit others to perform or
                  participate in any unlawful acts; (c) to violate any
                  international, federal, provincial or state regulations,
                  rules, laws, or local ordinances; (d) to infringe upon or
                  violate our intellectual property rights or the intellectual
                  property rights of others; (e) to harass, abuse, insult, harm,
                  defame, slander, disparage, intimidate, or discriminate based
                  on gender, sexual orientation, religion, ethnicity, race, age,
                  national origin, or disability; (f) to submit false or
                  misleading information; (g) to upload or transmit viruses or
                  any other type of malicious code that will or may be used in
                  any way that will affect the functionality or operation of the
                  Service or of any related website, other websites, or the
                  Internet; (h) to collect or track the personal information of
                  others; (i) to spam, phish, pharm, pretext, spider, crawl, or
                  scrape; (j) for any obscene or immoral purpose; or (k) to
                  interfere with or circumvent the security features of the
                  Service or any related website, other websites, or the
                  Internet. We reserve the right to terminate your use of the
                  Service or any related website for violating any of the
                  prohibited uses.
                </p>
                <br></br> <br></br>
                <h2>Intellectual property rights</h2>
                <p>
                  This Agreement does not transfer to you any intellectual
                  property owned by Website Operator or third-parties, and all
                  rights, titles, and interests in and to such property will
                  remain (as between the parties) solely with Website Operator.
                  All trademarks, service marks, graphics and logos used in
                  connection with our Website or Services, are trademarks or
                  registered trademarks of Website Operator or Website Operator
                  licensors. Other trademarks, service marks, graphics and logos
                  used in connection with our Website or Services may be the
                  trademarks of other third-parties. Your use of our Website and
                  Services grants you no right or license to reproduce or
                  otherwise use any Website Operator or third-party trademarks.
                </p>
                <br></br> <br></br>
                <h2>Limitation of liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, in no event
                  will Website Operator, its affiliates, officers, directors,
                  employees, agents, suppliers or licensors be liable to any
                  person for (a): any indirect, incidental, special, punitive,
                  cover or consequential damages (including, without limitation,
                  damages for lost profits, revenue, sales, goodwill, use of
                  content, impact on business, business interruption, loss of
                  anticipated savings, loss of business opportunity) however
                  caused, under any theory of liability, including, without
                  limitation, contract, tort, warranty, breach of statutory
                  duty, negligence or otherwise, even if Website Operator has
                  been advised as to the possibility of such damages or could
                  have foreseen such damages. To the maximum extent permitted by
                  applicable law, the aggregate liability of Website Operator
                  and its affiliates, officers, employees, agents, suppliers and
                  licensors, relating to the services will be limited to an
                  amount greater of one dollar or any amounts actually paid in
                  cash by you to Website Operator for the prior one month period
                  prior to the first event or occurrence giving rise to such
                  liability. The limitations and exclusions also apply if this
                  remedy does not fully compensate you for any losses or fails
                  of its essential purpose.
                </p>
                <br></br> <br></br>
                <h2>Indemnification</h2>
                <p>
                  You agree to indemnify and hold Website Operator and its
                  affiliates, directors, officers, employees, and agents
                  harmless from and against any liabilities, losses, damages or
                  costs, including reasonable attorneys' fees, incurred in
                  connection with or arising from any third-party allegations,
                  claims, actions, disputes, or demands asserted against any of
                  them as a result of or relating to your Content, your use of
                  the Website or Services or any willful misconduct on your
                  part.
                </p>
                <br></br> <br></br>
                <h2>Severability</h2>
                <p>
                  All rights and restrictions contained in this Agreement may be
                  exercised and shall be applicable and binding only to the
                  extent that they do not violate any applicable laws and are
                  intended to be limited to the extent necessary so that they
                  will not render this Agreement illegal, invalid or
                  unenforceable. If any provision or portion of any provision of
                  this Agreement shall be held to be illegal, invalid or
                  unenforceable by a court of competent jurisdiction, it is the
                  intention of the parties that the remaining provisions or
                  portions thereof shall constitute their agreement with respect
                  to the subject matter hereof, and all such remaining
                  provisions or portions thereof shall remain in full force and
                  effect.
                </p>
                <br></br> <br></br>
                <h2>Dispute resolution</h2>
                <p>
                  The formation, interpretation, and performance of this
                  Agreement and any disputes arising out of it shall be governed
                  by the substantive and procedural laws of California, United
                  States without regard to its rules on conflicts or choice of
                  law and, to the extent applicable, the laws of United States.
                  The exclusive jurisdiction and venue for actions related to
                  the subject matter hereof shall be the state and federal
                  courts located in California, United States, and you hereby
                  submit to the personal jurisdiction of such courts. You hereby
                  waive any right to a jury trial in any proceeding arising out
                  of or related to this Agreement. The United Nations Convention
                  on Contracts for the International Sale of Goods does not
                  apply to this Agreement.
                </p>
                <br></br> <br></br>
                <h2>Changes and amendments</h2>
                <p>
                  We reserve the right to modify this Agreement or its policies
                  relating to the Website or Services at any time, effective
                  upon posting of an updated version of this Agreement on the
                  Website. When we do, we will revise the updated date at the
                  bottom of this page. Continued use of the Website after any
                  such changes shall constitute your consent to such changes.
                  Policy was created with{" "}
                  <a
                  // style="color:inherit"
                  // target="_blank"
                  // title="Sample terms and conditions template"
                  // href="https://www.websitepolicies.com/terms-and-conditions-generator"
                  >
                    WebsitePolicies
                  </a>
                  .
                </p>
                <br></br> <br></br>
                <h2>Acceptance of these terms</h2>
                <p>
                  You acknowledge that you have read this Agreement and agree to
                  all its terms and conditions. By using the Website or its
                  Services you agree to be bound by this Agreement. If you do
                  not agree to abide by the terms of this Agreement, you are not
                  authorized to use or access the Website and its Services.
                </p>
                <br></br> <br></br>
                <h2>Contacting us</h2>
                <p>
                  If you have any questions about this Agreement, please contact
                  us.
                </p>
                <p>This document was last updated on October 24, 2019</p>
              </p>
              <h2 className="heading-secondary">Privacy Policy</h2>
              <p className="paragraph">
                <p>
                  This privacy policy (&quot;Policy&quot;) describes how Website
                  Operator (&quot;Website Operator&quot;, &quot;we&quot;,
                  &quot;us&quot; or &quot;our&quot;) collects, protects and uses
                  the personally identifiable information (&quot;Personal
                  Information&quot;) you (&quot;User&quot;, &quot;you&quot; or
                  &quot;your&quot;) may provide on the{" "}
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="http://howsthewaters.com"
                  >
                    howsthewaters.com
                  </a>{" "}
                  website and any of its products or services (collectively,
                  &quot;Website&quot; or &quot;Services&quot;). It also
                  describes the choices available to you regarding our use of
                  your Personal Information and how you can access and update
                  this information. This Policy does not apply to the practices
                  of companies that we do not own or control, or to individuals
                  that we do not employ or manage.
                </p>
                <br></br> <br></br>
                <h2>Automatic collection of information</h2>
                <p>
                  When you visit the Website our servers automatically record
                  information that your browser sends. This data may include
                  information such as your device's IP address, browser type and
                  version, operating system type and version, language
                  preferences or the webpage you were visiting before you came
                  to our Website, pages of our Website that you visit, the time
                  spent on those pages, information you search for on our
                  Website, access times and dates, and other statistics.
                </p>
                <br></br> <br></br>
                <h2>Collection of personal information</h2>
                <p>
                  You can visit the Website without telling us who you are or
                  revealing any information by which someone could identify you
                  as a specific, identifiable individual. If, however, you wish
                  to use some of the Website's features, you will be asked to
                  provide certain Personal Information (for example, your name
                  and e-mail address). We receive and store any information you
                  knowingly provide to us when you create an account, publish
                  content, or fill any online forms on the Website. When
                  required, this information may include your email address,
                  name, phone number, or other Personal Information. You can
                  choose not to provide us with your Personal Information, but
                  then you may not be able to take advantage of some of the
                  Website's features. Users who are uncertain about what
                  information is mandatory are welcome to contact us.
                </p>
                <br></br> <br></br>
                <h2>Use and processing of collected information</h2>
                <p>
                  Any of the information we collect from you may be used to
                  personalize your experience; improve our Website; improve
                  customer service and respond to queries and emails of our
                  customers; send notification emails such as password
                  reminders, updates, etc; run and operate our Website and
                  Services. Information collected automatically is used only to
                  identify potential cases of abuse and establish statistical
                  information regarding Website usage. This statistical
                  information is not otherwise aggregated in such a way that
                  would identify any particular user of the system.
                </p>
                <p>
                  We may process Personal Information related to you if one of
                  the following applies: (i) You have given your consent for one
                  or more specific purposes. Note that under some legislations
                  we may be allowed to process information until you object to
                  such processing (by opting out), without having to rely on
                  consent or any other of the following legal bases below. This,
                  however, does not apply, whenever the processing of Personal
                  Information is subject to European data protection law; (ii)
                  Provision of information is necessary for the performance of
                  an agreement with you and/or for any pre-contractual
                  obligations thereof; (iii) Processing is necessary for
                  compliance with a legal obligation to which you are subject;
                  (iv) Processing is related to a task that is carried out in
                  the public interest or in the exercise of official authority
                  vested in us; (v) Processing is necessary for the purposes of
                  the legitimate interests pursued by us or by a third party. In
                  any case, we will be happy to clarify the specific legal basis
                  that applies to the processing, and in particular whether the
                  provision of Personal Information is a statutory or
                  contractual requirement, or a requirement necessary to enter
                  into a contract.
                </p>
                <br></br> <br></br>
                <h2>Information transfer and storage</h2>
                <p>
                  Depending on your location, data transfers may involve
                  transferring and storing your information in a country other
                  than your own. You are entitled to learn about the legal basis
                  of information transfers to a country outside the European
                  Union or to any international organization governed by public
                  international law or set up by two or more countries, such as
                  the UN, and about the security measures taken by us to
                  safeguard your information. If any such transfer takes place,
                  you can find out more by checking the relevant sections of
                  this document or inquire with us using the information
                  provided in the contact section.
                </p>
                <br></br> <br></br>
                <h2>The rights of users</h2>
                <p>
                  You may exercise certain rights regarding your information
                  processed by us. In particular, you have the right to do the
                  following: (i) you have the right to withdraw consent where
                  you have previously given your consent to the processing of
                  your information; (ii) you have the right to object to the
                  processing of your information if the processing is carried
                  out on a legal basis other than consent; (iii) you have the
                  right to learn if information is being processed by us, obtain
                  disclosure regarding certain aspects of the processing and
                  obtain a copy of the information undergoing processing; (iv)
                  you have the right to verify the accuracy of your information
                  and ask for it to be updated or corrected; (v) you have the
                  right, under certain circumstances, to restrict the processing
                  of your information, in which case, we will not process your
                  information for any purpose other than storing it; (vi) you
                  have the right, under certain circumstances, to obtain the
                  erasure of your Personal Information from us; (vii) you have
                  the right to receive your information in a structured,
                  commonly used and machine readable format and, if technically
                  feasible, to have it transmitted to another controller without
                  any hindrance. This provision is applicable provided that your
                  information is processed by automated means and that the
                  processing is based on your consent, on a contract which you
                  are part of or on pre-contractual obligations thereof.
                </p>
                <br></br> <br></br>
                <h2>The right to object to processing</h2>
                <p>
                  Where Personal Information is processed for the public
                  interest, in the exercise of an official authority vested in
                  us or for the purposes of the legitimate interests pursued by
                  us, you may object to such processing by providing a ground
                  related to your particular situation to justify the objection.
                  You must know that, however, should your Personal Information
                  be processed for direct marketing purposes, you can object to
                  that processing at any time without providing any
                  justification. To learn, whether we are processing Personal
                  Information for direct marketing purposes, you may refer to
                  the relevant sections of this document.
                </p>
                <br></br> <br></br>
                <h2>How to exercise these rights</h2>
                <p>
                  Any requests to exercise User rights can be directed to the
                  Owner through the contact details provided in this document.
                  These requests can be exercised free of charge and will be
                  addressed by the Owner as early as possible.
                </p>
                <br></br> <br></br>
                <h2>California Privacy Rights</h2>
                <p>
                  In addition to the rights as explained in this Privacy Policy,
                  California residents who provide Personal Information (as
                  defined in the statute) to obtain products or services for
                  personal, family, or household use are entitled to request and
                  obtain from us, once a calendar year, information about the
                  Personal Information we shared, if any, with other businesses
                  for marketing uses. If applicable, this information would
                  include the categories of Personal Information and the names
                  and addresses of those businesses with which we shared such
                  personal information for the immediately prior calendar year
                  (e.g., requests made in the current year will receive
                  information about the prior year). To obtain this information
                  please contact us.
                </p>
                <br></br> <br></br>
                <h2>Privacy of children</h2>
                <p>
                  We do not knowingly collect any Personal Information from
                  children under the age of 13. If you are under the age of 13,
                  please do not submit any Personal Information through our
                  Website or Service. We encourage parents and legal guardians
                  to monitor their children's Internet usage and to help enforce
                  this Policy by instructing their children never to provide
                  Personal Information through our Website or Service without
                  their permission. If you have reason to believe that a child
                  under the age of 13 has provided Personal Information to us
                  through our Website or Service, please contact us. You must
                  also be at least 16 years of age to consent to the processing
                  of your Personal Information in your country (in some
                  countries we may allow your parent or guardian to do so on
                  your behalf).
                </p>
                <br></br> <br></br>
                <h2>Cookies</h2>
                <p>
                  The Website uses &quot;cookies&quot; to help personalize your
                  online experience. A cookie is a text file that is placed on
                  your hard disk by a web page server. Cookies cannot be used to
                  run programs or deliver viruses to your computer. Cookies are
                  uniquely assigned to you, and can only be read by a web server
                  in the domain that issued the cookie to you. We may use
                  cookies to collect, store, and track information for
                  statistical purposes to operate our Website and Services. You
                  have the ability to accept or decline cookies. Most web
                  browsers automatically accept cookies, but you can usually
                  modify your browser setting to decline cookies if you prefer.
                  If you choose to decline cookies, you may not be able to fully
                  experience the features of the Website and Services. To learn
                  more about cookies and how to manage them, visit{" "}
                  <a target="_blank" href="https://www.internetcookies.org">
                    internetcookies.org
                  </a>
                </p>
                <br></br> <br></br>
                <h2>Do Not Track signals</h2>
                <p>
                  Some browsers incorporate a Do Not Track feature that signals
                  to websites you visit that you do not want to have your online
                  activity tracked. Tracking is not the same as using or
                  collecting information in connection with a website. For these
                  purposes, tracking refers to collecting personally
                  identifiable information from consumers who use or visit a
                  website or online service as they move across different
                  websites over time. How browsers communicate the Do Not Track
                  signal is not yet uniform. As a result, this Website is not
                  yet set up to interpret or respond to Do Not Track signals
                  communicated by your browser. Even so, as described in more
                  detail throughout this Policy, we limit our use and collection
                  of your personal information.
                </p>
                <br></br> <br></br>
                <h2>Links to other websites</h2>
                <p>
                  Our Website contains links to other websites that are not
                  owned or controlled by us. Please be aware that we are not
                  responsible for the privacy practices of such other websites
                  or third-parties. We encourage you to be aware when you leave
                  our Website and to read the privacy statements of each and
                  every website that may collect Personal Information.
                </p>
                <br></br> <br></br>
                <h2>Information security</h2>
                <p>
                  We secure information you provide on computer servers in a
                  controlled, secure environment, protected from unauthorized
                  access, use, or disclosure. We maintain reasonable
                  administrative, technical, and physical safeguards in an
                  effort to protect against unauthorized access, use,
                  modification, and disclosure of Personal Information in its
                  control and custody. However, no data transmission over the
                  Internet or wireless network can be guaranteed. Therefore,
                  while we strive to protect your Personal Information, you
                  acknowledge that (i) there are security and privacy
                  limitations of the Internet which are beyond our control; (ii)
                  the security, integrity, and privacy of any and all
                  information and data exchanged between you and our Website
                  cannot be guaranteed; and (iii) any such information and data
                  may be viewed or tampered with in transit by a third-party,
                  despite best efforts.
                </p>
                <br></br> <br></br>
                <h2>Data breach</h2>
                <p>
                  In the event we become aware that the security of the Website
                  has been compromised or users Personal Information has been
                  disclosed to unrelated third parties as a result of external
                  activity, including, but not limited to, security attacks or
                  fraud, we reserve the right to take reasonably appropriate
                  measures, including, but not limited to, investigation and
                  reporting, as well as notification to and cooperation with law
                  enforcement authorities. In the event of a data breach, we
                  will make reasonable efforts to notify affected individuals if
                  we believe that there is a reasonable risk of harm to the user
                  as a result of the breach or if notice is otherwise required
                  by law. When we do, we will post a notice on the Website.
                </p>
                <br></br> <br></br>
                <h2>Legal disclosure</h2>
                <p>
                  We will disclose any information we collect, use or receive if
                  required or permitted by law, such as to comply with a
                  subpoena, or similar legal process, and when we believe in
                  good faith that disclosure is necessary to protect our rights,
                  protect your safety or the safety of others, investigate
                  fraud, or respond to a government request.
                </p>
                <br></br> <br></br>
                <h2>Changes and amendments</h2>
                <p>
                  We may update this Privacy Policy from time to time in our
                  discretion and will notify you of any material changes to the
                  way in which we treat Personal Information. When changes are
                  made, we will revise the updated date at the bottom of this
                  page. We may also provide notice to you in other ways in our
                  discretion, such as through contact information you have
                  provided. Any updated version of this Privacy Policy will be
                  effective immediately upon the posting of the revised Privacy
                  Policy unless otherwise specified. Your continued use of the
                  Website or Services after the effective date of the revised
                  Privacy Policy (or such other act specified at that time) will
                  constitute your consent to those changes. However, we will
                  not, without your consent, use your Personal Data in a manner
                  materially different than what was stated at the time your
                  Personal Data was collected. Policy was created with{" "}
                  <a
                    title="Sample privacy policy template"
                    href="https://www.websitepolicies.com/privacy-policy-generator"
                  >
                    WebsitePolicies
                  </a>
                  .
                </p>
                <br></br> <br></br>
                <h2>Acceptance of this policy</h2>
                <p>
                  You acknowledge that you have read this Policy and agree to
                  all its terms and conditions. By using the Website or its
                  Services you agree to be bound by this Policy. If you do not
                  agree to abide by the terms of this Policy, you are not
                  authorized to use or access the Website and its Services.
                </p>
                <br></br> <br></br>
                <h2>Contacting us</h2>
                <p>
                  If you would like to contact us to understand more about this
                  Policy or wish to contact us concerning any matter relating to
                  individual rights and your Personal Information, you may send
                  an email to
                  <br></br>
                  <a
                    title="Hows The Water Email"
                    href="howsthewaterteam@gmail.com"
                  >
                    howsthewaterteam@gmail.com
                  </a>
                  <br></br>
                </p>
                <p>This document was last updated on October 24, 2019.</p>
              </p>
              <h2 className="heading-secondary">Legal Statement</h2>
              <p className="paragraph">
                <p>
                  This disclaimer (&quot;Disclaimer&quot;,
                  &quot;Agreement&quot;) is an agreement between Website
                  Operator (&quot;Website Operator&quot;, &quot;us&quot;,
                  &quot;we&quot; or &quot;our&quot;) and you (&quot;User&quot;,
                  &quot;you&quot; or &quot;your&quot;). This Disclaimer sets
                  forth the general guidelines, terms and conditions of your use
                  of the{" "}
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="http://howsthewaters.com"
                  >
                    howsthewaters.com
                  </a>{" "}
                  website and any of its products or services (collectively,
                  &quot;Website&quot; or &quot;Services&quot;).
                </p>
                <br></br> <br></br>
                <h2>Representation</h2>
                <p>
                  Any views or opinions represented in this Website belong
                  solely to the Content creators and do not represent those of
                  people, institutions or organizations that the Website
                  Operator or creators may or may not be associated with in
                  professional or personal capacity, unless explicitly stated.
                  Any views or opinions are not intended to malign any religion,
                  ethnic group, club, organization, company, or individual.
                </p>
                <br></br> <br></br>
                <h2>Content and postings</h2>
                <p>
                  You may not modify, print or copy any part of the Website.
                  Inclusion of any part of this Website in another work, whether
                  in printed or electronic or another form or inclusion of any
                  part of the Website in another website by embedding, framing
                  or otherwise without the express permission of Website
                  Operator is prohibited.{" "}
                </p>
                <br></br> <br></br>
                <p>
                  You may submit comments for the Content available on the
                  Website. By uploading or otherwise making available any
                  information to Website Operator, you grant Website Operator
                  the unlimited, perpetual right to distribute, display,
                  publish, reproduce, reuse and copy the information contained
                  therein. You may not impersonate any other person through the
                  Website. You may not post content that is defamatory,
                  fraudulent, obscene, threatening, invasive of another person's
                  privacy rights or that is otherwise unlawful. You may not post
                  content that infringes on the intellectual property rights of
                  any other person or entity. You may not post any content that
                  includes any computer virus or other code designed to disrupt,
                  damage, or limit the functioning of any computer software or
                  hardware.
                </p>
                <br></br> <br></br>
                <h2>Compensation</h2>
                <p>
                  Some of the links on the Website may be &quot;affiliate
                  links&quot;. This means if you click on the link and purchase
                  an item, Website Operator will receive an affiliate
                  commission.
                </p>
                <br></br> <br></br>
                <h2>Indemnification and warranties</h2>
                <p>
                  While we have made every attempt to ensure that the
                  information contained on the Website is correct, Website
                  Operator is not responsible for any errors or omissions, or
                  for the results obtained from the use of this information. All
                  information on the Website is provided &quot;as is&quot;, with
                  no guarantee of completeness, accuracy, timeliness or of the
                  results obtained from the use of this information, and without
                  warranty of any kind, express or implied. In no event will
                  Website Operator, or its partners, employees or agents, be
                  liable to you or anyone else for any decision made or action
                  taken in reliance on the information on the Website or for any
                  consequential, special or similar damages, even if advised of
                  the possibility of such damages. Furthermore, information
                  contained on the Website and any pages linked to and from it
                  are subject to change at any time and without warning.
                </p>
                <br></br> <br></br>
                <p>
                  We reserve the right to modify this Disclaimer relating to the
                  Website or Services at any time, effective upon posting of an
                  updated version of this Disclaimer on the Website. When we do
                  we will revise the updated date at the bottom of this page.
                  Continued use of the Website after any such changes shall
                  constitute your consent to such changes. Policy was created
                  with{" "}
                  <a
                    title="Disclaimer generator"
                    href="https://www.websitepolicies.com/disclaimer-generator"
                  >
                    WebsitePolicies
                  </a>
                  .
                </p>
                <br></br> <br></br>
                <h2>Acceptance of this disclaimer</h2>
                <p>
                  You acknowledge that you have read this Disclaimer and agree
                  to all its terms and conditions. By accessing the Website you
                  agree to be bound by this Disclaimer. If you do not agree to
                  abide by the terms of this Disclaimer, you are not authorized
                  to use or access the Website.
                </p>
                <br></br> <br></br>
                <h2>Contacting us</h2>
                <p>
                  If you would like to contact us to understand more about this
                  Disclaimer or wish to contact us concerning any matter
                  relating to it, you may send an email to
                  <br></br>
                  <a
                    title="Hows The Water Email"
                    href="howsthewaterteam@gmail.com"
                  >
                    howsthewaterteam@gmail.com
                  </a>
                  <br></br>
                </p>
                <br></br> <br></br>
                <p>This document was last updated on October 24, 2019.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightFooter;
