import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import { HiOutlineUserCircle, HiOutlineShieldCheck, HiOutlineExclamationCircle, HiOutlineBookOpen, HiOutlineClipboardList, HiOutlineScale, HiOutlineHeart, HiOutlineUserGroup, HiOutlineCamera, HiOutlineBell, HiOutlineBadgeCheck } from "react-icons/hi"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const sections = [
  { id: "statement", title: "1. Policy Statement", icon: HiOutlineBadgeCheck },
  { id: "purpose", title: "2. Purpose of the Policy", icon: HiOutlineBookOpen },
  { id: "definition", title: "3. Definition of a Child", icon: HiOutlineUserCircle },
  { id: "risks", title: "4. Child Protection Risks", icon: HiOutlineExclamationCircle },
  { id: "scope", title: "5. Scope of the Policy", icon: HiOutlineClipboardList },
  { id: "zero-tolerance", title: "6. Zero-Tolerance Policy", icon: HiOutlineShieldCheck },
  { id: "staff-conduct", title: "7. Code of Conduct for Staff", icon: HiOutlineUserGroup },
  { id: "guest-conduct", title: "8. Guest Code of Conduct", icon: HiOutlineHeart },
  { id: "recruitment", title: "9. Safe Recruitment", icon: HiOutlineBadgeCheck },
  { id: "suppliers", title: "10. Supplier Responsibilities", icon: HiOutlineClipboardList },
  { id: "community", title: "11. Community Safeguards", icon: HiOutlineUserGroup },
  { id: "photography", title: "12. Photography Safeguards", icon: HiOutlineCamera },
  { id: "reporting", title: "13. Reporting Concerns", icon: HiOutlineBell },
  { id: "response", title: "14. Response Procedures", icon: HiOutlineShieldCheck },
  { id: "confidentiality", title: "15. Confidentiality", icon: HiOutlineShieldCheck },
  { id: "training", title: "16. Training & Awareness", icon: HiOutlineBookOpen },
  { id: "disciplinary", title: "17. Disciplinary Action", icon: HiOutlineScale },
  { id: "monitoring", title: "18. Monitoring & Review", icon: HiOutlineClipboardList },
  { id: "management", title: "19. Management Responsibility", icon: HiOutlineUserGroup },
  { id: "declaration", title: "20. Policy Declaration", icon: HiOutlineClipboardList },
  { id: "contact", title: "21. Contact Information", icon: HiOutlineBell },
]

export default function ChildProtectionPolicy() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-white font-ui">
      <Helmet>
        <title>Child Protection and Safeguarding Policy | Modus Safaris</title>
        <meta
          name="description"
          content="Official Child Protection and Safeguarding Policy of Modus Safaris (UG) Limited. Protecting children from abuse and exploitation."
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-[#3a5a40] text-white py-20 px-6 md:px-12 lg:px-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80 italic">Safeguarding & Protection</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-heading uppercase italic">
            Child Protection & Safeguarding Policy
          </h1>
          <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed italic">
            Modus Safaris (UG) Limited is fully committed to protecting children from all forms of abuse, exploitation, neglect, and harm.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-24 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 custom-scrollbar">
              <p className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Contents</p>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 border-l border-gray-200 pl-4">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-left hover:text-[#3a5a40] transition-colors py-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy Content */}
          <div className="flex-1 space-y-12 text-gray-700 leading-relaxed text-justify">
            
            <section id="statement" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBadgeCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">1. Policy Statement and Commitment</h2>
              </div>
              <div className="space-y-4">
                <p>
                  Modus Safaris (UG) Limited is fully committed to protecting children from all forms of abuse, exploitation, neglect, and harm. We recognize that tourism activities, especially those involving community visits, cultural interactions, and photography, can create situations where children may be vulnerable to inappropriate behavior, exploitation, or harm.
                </p>
                <p>
                  As a responsible tour operator, Modus Safaris acknowledges its duty of care to ensure that its operations do not directly or indirectly contribute to child abuse or exploitation. We are committed to creating a safe tourism environment that respects children’s dignity, privacy, safety, and rights.
                </p>
                <p>
                  Modus Safaris maintains a strict zero-tolerance policy toward child abuse, sexual exploitation, child labour exploitation, trafficking, or any form of harm against children.
                </p>
                <p className="text-gray-900 font-medium">This policy aligns with international and national child protection frameworks including:</p>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">United Nations Convention on the Rights of the Child (UNCRC)</li>
                  <li className="list-disc">Uganda Children Act (Cap 59)</li>
                  <li className="list-disc">UN Guiding Principles on Business and Human Rights</li>
                  <li className="list-disc">International Labour Organization (ILO) Conventions</li>
                  <li className="list-disc">Travelife Child Protection and Safeguarding Standards</li>
                  <li className="list-disc">Sustainable Development Goal (SDG) 16.2</li>
                </ul>
                <p>This policy applies to all Modus Safaris operations in Uganda, Rwanda, Kenya, and other destinations where the company operates.</p>
              </div>
            </section>

            <section id="purpose" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBookOpen size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">2. Purpose of the Policy</h2>
              </div>
              <div className="space-y-4">
                <p>
                  The purpose of this policy is to provide clear guidance and procedures to prevent, identify, and respond to child protection risks associated with tourism operations.
                </p>
                <p className="text-gray-900 font-medium">Specifically, the policy aims to:</p>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Protect children from abuse, exploitation, neglect, and harm associated with tourism activities</li>
                  <li className="list-disc">Ensure Modus Safaris staff, suppliers, partners, and guests understand their responsibilities in protecting children</li>
                  <li className="list-disc">Establish clear standards of acceptable and unacceptable behavior when interacting with children</li>
                  <li className="list-disc">Prevent child sexual exploitation and trafficking linked to tourism</li>
                  <li className="list-disc">Promote responsible tourism practices that respect children's rights</li>
                  <li className="list-disc">Provide clear procedures for reporting and responding to child protection concerns</li>
                  <li className="list-disc">Ensure compliance with national and international child protection laws</li>
                </ul>
                <p>This policy reflects Modus Safaris’ commitment to ethical tourism and social responsibility.</p>
              </div>
            </section>

            <section id="definition" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserCircle size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">3. Definition of a Child</h2>
              </div>
              <div className="space-y-4 text-justify">
                <p>
                  For the purposes of this policy, a child is defined as any person under the age of 18 years, regardless of whether local laws may permit earlier adulthood or employment.
                </p>
                <p>
                  Children are particularly vulnerable due to their age, dependence on adults, and limited ability to protect themselves from harm or exploitation.
                </p>
              </div>
            </section>

            <section id="risks" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineExclamationCircle size={28} className="text-amber-600" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">4. Child Protection Risks in Tourism</h2>
              </div>
              <div className="space-y-4">
                <p>Tourism can create situations where children may be exposed to harm. These risks may occur intentionally or unintentionally.</p>
                <div className="grid gap-6">
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                    <h4 className="font-bold text-gray-900 mb-2">4.1 Sexual Exploitation</h4>
                    <p className="text-sm">This includes situations where tourists or tourism workers engage in sexual activity with children, which is illegal and harmful.</p>
                  </div>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                    <h4 className="font-bold text-gray-900 mb-2">4.2 Inappropriate Physical or Emotional Contact</h4>
                    <p className="text-sm">Tourists or staff may interact with children in ways that are inappropriate or harmful, even unintentionally.</p>
                  </div>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                    <h4 className="font-bold text-gray-900 mb-2">4.3 Child Labour Exploitation</h4>
                    <p className="text-sm">Children may be employed illegally or forced to work in unsafe conditions in tourism businesses.</p>
                  </div>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                    <h4 className="font-bold text-gray-900 mb-2">4.4 Exploitation through Photography or Media</h4>
                    <p className="text-sm">Tourists may take photos or videos of children without consent and use them inappropriately.</p>
                  </div>
                  <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50">
                    <h4 className="font-bold text-gray-900 mb-2">4.5 Encouraging Dependency</h4>
                    <p className="text-sm">Giving money, gifts, or sweets directly to children can encourage begging and disrupt education and family structures.</p>
                  </div>
                </div>
                <p className="mt-4 font-medium text-[#3a5a40]">Modus Safaris actively works to prevent these risks.</p>
              </div>
            </section>

            <section id="scope" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineClipboardList size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">5. Scope of the Policy</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-900 font-medium text-justify">This policy applies to all individuals associated with Modus Safaris, including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 pl-6 text-justify">
                  <li className="list-disc">Full-time and part-time employees</li>
                  <li className="list-disc">Driver-guides and tour leaders</li>
                  <li className="list-disc">Freelance guides and contractors</li>
                  <li className="list-disc">Management and administrative staff</li>
                  <li className="list-disc">Volunteers and interns</li>
                  <li className="list-disc">Suppliers and business partners</li>
                  <li className="list-disc">Hotels, lodges, and activity providers</li>
                  <li className="list-disc">Guests and clients</li>
                </ul>
                <p className="text-gray-900 font-medium text-justify mt-6">This policy applies during all tourism activities including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 pl-6">
                  <li className="list-disc">Safaris and tours</li>
                  <li className="list-disc">Cultural and community visits</li>
                  <li className="list-disc">Educational visits</li>
                  <li className="list-disc">Transfers and excursions</li>
                  <li className="list-disc">Any tourism activity organized by Modus Safaris</li>
                </ul>
              </div>
            </section>

            <section id="zero-tolerance" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-red-700" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">6. Zero-Tolerance Policy</h2>
              </div>
              <div className="space-y-4 text-justify">
                <p>
                  Modus Safaris maintains a strict zero-tolerance policy toward any form of child abuse or exploitation.
                </p>
                <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                  <p className="text-red-900 font-bold mb-4 uppercase tracking-widest text-sm">Strictly Prohibited:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-red-800">
                    <li className="list-disc ml-4">Sexual abuse</li>
                    <li className="list-disc ml-4">Physical abuse</li>
                    <li className="list-disc ml-4">Emotional abuse</li>
                    <li className="list-disc ml-4">Child trafficking</li>
                    <li className="list-disc ml-4">Child labour exploitation</li>
                    <li className="list-disc ml-4">Neglect</li>
                    <li className="list-disc ml-4">Exploitative photography</li>
                  </ul>
                </div>
                <p className="mt-4 font-medium text-gray-900">
                  Any violation of this policy will result in immediate disciplinary action and may be reported to authorities.
                </p>
              </div>
            </section>

            <section id="staff-conduct" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">7. Code of Conduct for Staff</h2>
              </div>
              <div className="space-y-4 text-justify text-justify">
                <p>All Modus Safaris staff must maintain the highest professional standards when interacting with children. Staff must:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc">Treat children with dignity, respect, and care</li>
                  <li className="list-disc">Maintain appropriate professional boundaries at all times</li>
                  <li className="list-disc">Avoid being alone with children unnecessarily</li>
                  <li className="list-disc">Avoid physical contact unless appropriate and culturally acceptable</li>
                  <li className="list-disc">Never engage in sexual activity with a child</li>
                  <li className="list-disc">Never exploit children in any way</li>
                  <li className="list-disc">Never use abusive, inappropriate, or offensive language</li>
                  <li className="list-disc">Never encourage children to interact with tourists inappropriately</li>
                  <li className="list-disc">Always prioritize child safety</li>
                </ul>
                <p className="mt-4">Staff must understand that their actions represent Modus Safaris and must protect children’s rights.</p>
              </div>
            </section>

            <section id="guest-conduct" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineHeart size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">8. Guest Code of Conduct Regarding Children</h2>
              </div>
              <div className="space-y-4 text-justify">
                <p>Guests are required to behave responsibly and respectfully when interacting with children. Guests must:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc">Treat children respectfully and appropriately</li>
                  <li className="list-disc">Never engage in sexual activity with children</li>
                  <li className="list-disc">Never photograph children without permission</li>
                  <li className="list-disc">Never give money, sweets, or gifts directly to children</li>
                  <li className="list-disc">Respect community norms and cultural values</li>
                  <li className="list-disc">Follow guidance from Modus Safaris staff</li>
                </ul>
                <p className="mt-4 font-medium text-gray-900">Guests who violate this policy may be removed from tours and reported to authorities.</p>
              </div>
            </section>

            <section id="recruitment" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBadgeCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">9. Safe Recruitment and Staff Screening</h2>
              </div>
              <div className="space-y-4 text-justify text-justify">
                <p>Modus Safaris is committed to hiring staff who respect child protection standards. Recruitment procedures include:</p>
                <ul className="space-y-3 pl-6 text-justify">
                  <li className="list-disc">Verifying identity and employment history</li>
                  <li className="list-disc">Checking references where possible</li>
                  <li className="list-disc">Conducting interviews</li>
                  <li className="list-disc">Providing safeguarding training</li>
                </ul>
                <p className="mt-4">Staff who pose risks to children will not be employed.</p>
              </div>
            </section>

            <section id="suppliers" className="scroll-mt-28 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineClipboardList size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">10. Supplier and Partner Responsibilities</h2>
              </div>
              <div className="space-y-4">
                <p>Modus Safaris works with suppliers who respect child protection standards. Suppliers must:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc">Not employ illegal child labour</li>
                  <li className="list-disc">Protect children’s rights</li>
                  <li className="list-disc">Follow child protection laws</li>
                  <li className="list-disc">Report child protection concerns</li>
                </ul>
                <p className="mt-4">Suppliers violating this policy may lose contracts.</p>
              </div>
            </section>

            <section id="community" className="scroll-mt-28 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">11. Community Visit Safeguards</h2>
              </div>
              <div className="space-y-4">
                <p>Community visits must protect children’s dignity and safety. Guidelines include:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc">Children must not be used as tourist attractions</li>
                  <li className="list-disc">Visits must be respectful and ethical</li>
                  <li className="list-disc">Communities must give informed consent</li>
                  <li className="list-disc">Children must not be exploited for tourism</li>
                </ul>
                <p className="mt-4">Community dignity must be respected.</p>
              </div>
            </section>

            <section id="photography" className="scroll-mt-28 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineCamera size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">12. Photography and Media Safeguards</h2>
              </div>
              <div className="space-y-4">
                <p>Photography can expose children to exploitation if not properly managed. Staff and guests must:</p>
                <ul className="space-y-3 pl-6">
                  <li className="list-disc">Obtain consent from parents or guardians before photographing children</li>
                  <li className="list-disc">Respect children’s privacy</li>
                  <li className="list-disc">Avoid inappropriate or exploitative images</li>
                  <li className="list-disc">Never share exploitative images</li>
                </ul>
              </div>
            </section>

            <section id="reporting" className="scroll-mt-28 text-justify text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBell size={28} className="text-red-700" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">13. Reporting Child Protection Concerns</h2>
              </div>
              <div className="space-y-4">
                <p>All child protection concerns must be reported immediately. Concerns may include suspected abuse, inappropriate behaviour, or exploitation.</p>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                  <p className="font-bold text-red-900 mb-2">Reports must be made to:</p>
                  <ul className="space-y-1 text-red-800">
                    <li className="list-disc ml-4">Modus Safaris Management</li>
                    <li className="list-disc ml-4">Local Police</li>
                    <li className="list-disc ml-4">Relevant Local Authorities</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="response" className="scroll-mt-28 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineShieldCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">14. Response Procedures</h2>
              </div>
              <div className="space-y-4">
                <p>Modus Safaris will take all reports seriously, investigate concerns, protect the child involved, and report directly to authorities.</p>
                <p className="font-bold text-gray-900">Child safety is the priority.</p>
              </div>
            </section>

            <section id="confidentiality" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBadgeCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">15. Confidentiality</h2>
              </div>
              <p className="text-justify">All reports will be handled confidentially to protect the child and reporter.</p>
            </section>

            <section id="training" className="scroll-mt-28 text-justify text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBookOpen size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">16. Training and Awareness</h2>
              </div>
              <div className="space-y-4">
                <p>Modus Safaris provides training to staff to ensure they understand safeguarding responsibilities on child protection, provide awareness materials, include child protection in staff induction and provide guidance to guests.</p>
              </div>
            </section>

            <section id="disciplinary" className="scroll-mt-28 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineScale size={28} className="text-red-700" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">17. Disciplinary Action</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-900 font-medium text-justify">Violations may result in:</p>
                <ul className="space-y-2 pl-6">
                  <li className="list-disc">Termination of employment</li>
                  <li className="list-disc">Contract termination</li>
                  <li className="list-disc">Removal from tours</li>
                  <li className="list-disc">Legal action</li>
                </ul>
              </div>
            </section>

            <section id="monitoring" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineClipboardList size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">18. Monitoring and Review</h2>
              </div>
              <p className="text-justify">This policy will be reviewed annually.</p>
            </section>

            <section id="management" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineUserGroup size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">19. Management Responsibility</h2>
              </div>
              <p className="text-justify">Management is responsible for implementing and enforcing this policy.</p>
            </section>

            <section id="declaration" className="scroll-mt-28 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBadgeCheck size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">20. Policy Declaration</h2>
              </div>
              <div className="space-y-4">
                <p>Modus Safaris is fully committed to protecting children and promoting responsible tourism that respects and safeguards children’s rights. All staff, partners, and guests must comply with this policy.</p>
              </div>
            </section>

            <section id="contact" className="scroll-mt-28 pb-20 text-justify">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineBell size={28} className="text-[#3a5a40]" />
                <h2 className="text-2xl font-medium text-gray-900 font-heading uppercase italic">21. Contact Information</h2>
              </div>
              <div className="bg-[#3a5a40]/5 p-8 rounded-2xl border border-[#3a5a40]/10">
                <p className="font-bold text-gray-900 mb-4">For reporting child protection concerns, contact:</p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium text-gray-900">Modus Safaris (UG) Limited</p>
                  <p>Email: <a href="mailto:info@modussafaris.com" className="text-[#3a5a40] hover:underline">info@modussafaris.com</a></p>
                  <p>Phone: <a href="tel:+256763174100" className="text-[#3a5a40] hover:underline">+256 763 174 100</a></p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-[#3a5a40]/10 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">Effective Date</p>
                    <p className="text-gray-900 font-medium">October 10, 2025</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">Next Review Date</p>
                    <p className="text-gray-900 font-medium">October 10, 2026</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Approved by</p>
                  <p className="text-gray-900 font-medium">Managing Director, Modus Safaris (UG) Limited</p>
                </div>
                <div className="mt-6">
                  <p className="text-xs text-gray-400 uppercase font-bold mb-1">Applies to:</p>
                  <p className="text-gray-900 font-medium">All staff, guides, contractors, suppliers, partners, volunteers, and guests</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
