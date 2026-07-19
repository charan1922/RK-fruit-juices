import { MONTHLY_PLANS, MIXED_PLAN } from "@/data/plans";
import ContactActions from "@/components/contact/ContactActions";
import ContactForm from "@/components/contact/ContactForm";

export default function PricingSection() {
  return (
    <section className="pricing" id="subscribe">
      <div className="pricing-head">
        <h2>Monthly Subscription</h2>
        <p>Delivery by 9:00 AM · Monday–Saturday · Bulk orders welcome</p>
      </div>

      <div className="pricing-grid">
        {MONTHLY_PLANS.map((plan) => (
          <div key={plan.id} className="plan-card">
            <span className="plan-label">{plan.name}</span>
            <span className="plan-price">
              ₹{plan.monthly}
              <small>/mo</small>
            </span>
            <span className="plan-was">₹{plan.wasMonthly}</span>
            <span className="plan-note">₹{plan.perDay}/day equivalent</span>
          </div>
        ))}
        <div className="plan-card featured">
          <span className="plan-label">{MIXED_PLAN.name}</span>
          <span className="plan-price">
            ₹{MIXED_PLAN.monthly}
            <small>/mo</small>
          </span>
          <span className="plan-was">₹{MIXED_PLAN.wasMonthly}</span>
          <span className="plan-note">{MIXED_PLAN.detail}</span>
        </div>
      </div>

      <ContactActions />

      <div className="contact-form-wrap">
        <ContactForm />
      </div>
    </section>
  );
}
