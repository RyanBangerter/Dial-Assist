import React from 'react';
import { ScrollView, StyleSheet, View, Text, Modal } from 'react-native';
import { CheckBox, Card, Button,FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Signaturemodal from '../components/signaturemodal';

export default class HIPPAuseragreementscreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Card title= 'HIPAA Terms and Conditions'>
            <View>
                <Text style={{textAlign: 'center'}}>ONLINE SERVICE AGREEMENT
                    TERMS OF USE

                    Terms and Conditions of Use:  We created the Dial-Assist (“Dial-Assist”) dialysis patient assistance app (referred to as the “Site”) for the convenience of our customers and employees. By accessing the Site or other web sites through links provided by Dial-Assist, you agree to all terms, conditions, and notices contained or referenced herein (the “Terms of Use”). If you do not agree to these Terms of Use please do not use the Site. We reserve the right, at our discretion, to update or revise these Terms of Use. Please check the Terms of Use periodically for changes. Your continued use of the Site following the posting of any changes to the Terms of Use constitutes acceptance of those changes.

                    Agreement to Rules of Use:  You agree to abide by this Agreement and the Dial-Assist Rules of Use, including but not limited to, agreeing not to use the Site for any unlawful purpose. A copy of the Rules of Use, which you should review, can be found below.

                    Third-Party Sites:  The Site may produce automated search results or otherwise link you to other sites on the Internet. These sites may contain information or material that some people may find inappropriate or offensive. These other sites are not under the control of Dial-Assist, and you acknowledge that Dial-Assist is not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content of such sites. The inclusion of such a link does not imply endorsement of the site by Dial-Assist or any association with its operators.

                    Proprietary Rights:  You acknowledge and agree that all content and materials available on the Site are protected by copyrights, trademarks, service marks, patents, trade secrets, or other proprietary rights and laws. Except as expressly authorized by Dial-Assist, you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit, or create derivative works from such materials or content. Notwithstanding the above, you may print or download one copy of the materials or content on the Site on any single computer for your personal, non-commercial use, provided you keep intact all copyright and other proprietary notices. Systematic retrieval of data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database or directory without written permission from Dial-Assist is prohibited. In addition, use of the content or materials for any purpose not expressly permitted in these Terms of Use is prohibited. 

                    As noted above, reproduction, copying, or redistribution for commercial purposes of any materials or design elements on the Site is strictly prohibited without the express written permission of Dial-Assist. Permission is granted only when certain limited criteria are met. For information on requesting such permission, please contact Dial-Assist.

                    HIPAA Terms and Conditions

                    Definitions

                    “HIPAA” shall mean Section 262 of the Health Insurance Portability and Accountability Act, P.L. 104-191 (“HIPAA”) which governs the use and transmission of individually identifiable health information. 

                    “Legal Requirement” shall mean any law or regulation affecting the use or disclosure of Protected Health Information. 

                    "Protected Health Information" shall mean any Protected Health Information as defined in HIPAA or any similar information obtained from individuals as a result of the Customer providing products or services.


                    Security and Confidentiality:  You acknowledge that Protected Health Information requires special safeguarding and agree to abide by the laws of your company, state, and HIPAA regarding the protection and disclosure of Protected Health Information contained in the Site.

                    Safeguards:  You agree that it is your responsibility to implement reasonable and appropriate administrative, technical and physical safeguards to protect the confidentiality, integrity and availability of all Protected Health Information and any and all other confidential information accessible on or through the Site.

                    Disclaimer of Warranties:  ALL MATERIALS, INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED ON OR AVAILABLE THROUGH THE SITE (THE “CONTENT”) ARE PROVIDED “AS IS” AND “AS AVAILABLE” FOR YOUR USE. THE CONTENT IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NONINFRINGEMENT. McCALLIE DOES NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SITE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE CONTENT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOUR USE OF THE SITE IS SOLELY AT YOUR RISK. BECAUSE SOME JURISDICTIONS DO NOT PERMIT THE EXCLUSION OF CERTAIN WARRANTIES, THESE EXCLUSIONS MAY NOT APPLY TO YOU.

                    Limitation of Liability:  UNDER NO CIRCUMSTANCES SHALL MCCALLIE, ITS SUBSIDIARIES, OR ITS LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF OR INABILITY TO USE, THE SITE. THIS LIMITATION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF MCCALLIE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, MCCALLIE’S LIABILITY IN SUCH JURISDICTIONS SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.

                    Copyright:  The entire content (including text and “look and feel” attributes) of the Site is ©2006 Dial-Assist Data Management Systems, LLC. Any use of such content requires the written permission of Dial-Assist Data Management Systems, LLC. All rights reserved.

                    Viruses:  Because of the marked increase in the fabrication and proliferation of computer viruses affecting the Internet, we want to warn you about infections or viral contamination on your system. It is your responsibility to scan any and all downloaded or viewed materials received from the Internet. We are not responsible or liable for any damage caused by such hazards.

                    Security and E-Mail:  Be aware that Internet and e-mail communications are inherently not confidential. It is possible that information transmitted to or from us may be read or obtained by other parties. 

                    Dial-Assist uses no encryption (data scrambling) on certain portions of the Site, and up to 128-bit encryption on other portions. When you are on any web site that asks you for confidential information (social security numbers or protected health data, for example), you should check to see if the information being transmitted is encrypted in order to increase the security of your information. 

                    We welcome your e-mail correspondence but if you need to send confidential information and are concerned about its security, then you should consider sending it by phone or by regular mail instead.

                    Indemnification:  Upon a request by Dial-Assist, you agree to defend, indemnify, and hold harmless Dial-Assist and its subsidiary and other affiliated companies, and their employees, contractors, officers, and directors from all liabilities, claims, and expenses, including attorney’s fees that arise from your use or misuse of the Site or failure to comply with the terms of this Agreement. Dial-Assist reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with Dial-Assist in asserting any available defenses. 

                    MCCALLIE DOES NOT, AND SHALL NOT, INDEMNIFY YOU OR HOLD YOU HARMLESS OTHER THAN AS SPECIFICALLY SET FORTH IN THIS SECTION ENTITLED "INDEMNIFICATION."

                    Contents:  Statements made in Internet sites, newsgroups, message boards, e-mail, forums, conferences and chats reflect only the views of their authors. Forum managers, forum hosts, or Merchants appearing on Dial-Assist site are not authorized Dial-Assist spokespersons, and their views do not necessarily reflect those of Dial-Assist.

                    Licenses and Idea Submissions:  You agree to grant to Dial-Assist a non-exclusive, worldwide, royalty-free, perpetual license, with the right to sublicense, to reproduce, distribute, transmit, create derivative works of, publicly display and publicly perform any materials and other information (including, without limitation, ideas contained therein for new or improved products or services) you submit to public areas of Dial-Assist (such as BBSs, forums and chat rooms) by all means and in any media now known or hereafter developed. You hereby waive your moral rights in any such materials and information, and you hereby warrant that any such materials and information are original with you, or that you have the right to submit such materials and information. You agree that you shall have no recourse against Dial-Assist for any alleged or actual infringement or misappropriation of any proprietary right in your communication to us.

                    Third-Party Rights:  The provisions of the Sections Disclaimer of Warranties, Limitation of Liability and Indemnification are for the benefit of Dial-Assist and its officers, directors, employees, agents, licensors, suppliers, and information providers. Each of these individuals or entities shall have the right to assert and enforce those provisions directly against you on its own behalf.

                    International Use:  Dial-Assist makes no representation that materials on the Site are appropriate or available for use in locations outside the United States, and accessing them from territories where their contents are illegal is prohibited. Those who choose to access the Site from other locations do so on their own initiative and are responsible for compliance with local laws.

                    Limited License:  By this Agreement, Dial-Assist grants, subject to the terms of this Agreement, only a limited, non-transferable and non-exclusive license to use the software and documentation necessary to access, explore and otherwise use the Site in real time and to use the materials on this Internet site in a manner consistent with this Agreement.

                    Electronic Means:  You and Dial-Assist desire to facilitate certain transactions pursuant to this Agreement by exchanging documents, records and signatures electronically or by utilizing electronic agents. The use of electronic facilities or agents shall be in accordance with procedures established by Dial-Assist and governed by the applicable provisions of the Uniform Electronic Transactions Act as adopted in the State of Nebraska.

                    Force Majeure:  Dial-Assist shall not be responsible for any damages, delay in performance or failure to perform hereunder to the extent that such failure was caused by acts or occurrences beyond its control including, but not limited to, strikes or other labor disputes, riots or other civil disturbance, internet or communication failures, embargoes, government regulations or requirements (executive, legislative, judicial, military or otherwise), power failure, electrical surges or current fluctuations, lightning, earthquake, flood, war, water, the elements, or other forces of nature, delays or failures of transportation, equipment shortages or suppliers' failures.

                    Choice of Law and Forum:  These Terms of Use shall be governed by and construed in accordance with the laws of the State of Nebraska, excluding its conflicts of law rules. You expressly agree that the jurisdiction for any claim or action arising out of or relating to these Terms of Use or your use of the Site may be filed in the state or federal courts located in the State of Nebraska, and you further agree and submit to the exercise of personal jurisdiction of such courts for the purpose of litigating any such claim or action.

                    Severability and Integration:  Unless otherwise specified herein, this Agreement constitutes the entire agreement between you and Dial-Assist with respect to the Site and supersedes all prior or contemporaneous communications and proposals (whether oral, written, or electronic) between you and Dial-Assist with respect to the Site. If any part of these Terms of Use is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.

                    Notices Regarding Software, Documents and Services Available on the Site:  IN NO EVENT SHALL McCALLIE AND/OR ITS RESPECTIVE SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF SOFTWARE, DOCUMENTS, PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR INFORMATION AVAILABLE FROM THIS SERVER.

                    Notices and Procedure for Making Claims of Copyright Infringement:  Pursuant to Title 17, United States Code, Section 512(C)(2), notifications of claimed copyright infringement should be sent to Service Provider’s Designated Agent. All inquiries that are not relevant to the following procedure will not receive a response. For more information click contact: privacy@mccallie.com .

                    Termination:  Dial-Assist reserves the right, in its sole discretion, to terminate your access to all or part of the Site, with or without notice.

                    Rules of Use:  By posting information in or otherwise using any communications service, chat room, message board, newsgroup, software library, or other interactive service that may be available to you on or through the Site, you agree that you will not upload, post, or otherwise distribute or facilitate distribution of any content--including text, communications, software, images, sounds, data, or other information—that reflects any of the below.

                    Is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, contains explicit or graphic descriptions or accounts of sexual acts (including, but not limited to, sexual language of a violent or threatening nature directed at another individual or group of individuals), or otherwise violates Dial-Assist's rules or policies.
                    Victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability.
                    Infringes on any patent, trademark, trade secret, copyright, right of publicity, or other proprietary right of any party.
                    Constitutes unauthorized or unsolicited advertising, junk or bulk e-mail (also known as "spamming"), chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.
                    Contains software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party.
                    Impersonates any person or entity, including any employee or representative of Dial-Assist.
                    You also agree that you will not harvest or collect information about the users or members of the Site or use such information for the purpose of transmitting or facilitating transmission of unsolicited bulk electronic e-mail or communications.
                    Dial-Assist generally does not pre-screen, monitor, or edit the content posted by users of communications services, chat rooms, message boards, newsgroups, software libraries, or other interactive services that may be available on or through the Site. However, Dial-Assist and its agents have the right, at their sole discretion, to remove any content that, in Dial-Assist's judgment, does not comply with the Rules of Use or is otherwise harmful, objectionable, or inaccurate. Dial-Assist is not responsible for any failure or delay in removing such content.
                </Text>
            </View>
        </Card>
            <View style= {{paddingBottom: 30}}>
                <CheckBox
                   title='I have read and understand the HIPAA Terms and Conditions'
                />
                <Signaturemodal/>
                <Button 
                    backgroundColor= '#2f95dc'
                    raised
                    title='Submit'
                    onPress={() =>navigate('Main')} />
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

