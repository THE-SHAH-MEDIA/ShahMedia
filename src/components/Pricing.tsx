import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const tiers = [
  {
    name: "Digital Atelier",
    price: "₹60,000",
    description: "For the craftsman who needs a world-class online presence.",
    features: [
      "Visually Stunning Portfolio Website",
      '"Dream Project" Intake Form',
      "24/7 AI Concierge",
    ],
    cta: "Get Started",
  },
  {
    name: "Local Growth Engine",
    price: "₹50,000 + ₹30,000/mo",
    description: "Our flagship product for ambitious professionals ready to scale.",
    features: [
      "Everything in Digital Atelier",
      "The Reputation Magnet",
      "The Velvet Rope",
    ],
    cta: "Book a Discovery Call",
    popular: true,
  },
  {
    name: "Market Leader",
    price: "₹75,000 + ₹65,000/mo",
    description: "For the top 1% of firms who want to dominate the market.",
    features: [
      "Everything in Local Growth Engine",
      "Professional Content Creation",
      "Thought Leadership",
      "Proactive PR",
    ],
    cta: "Book a Discovery Call",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 font-montserrat">
          The Right Investment for Your Ambition
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={tier.popular ? "border-2 border-[#007BFF]" : ""}
            >
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <p className="text-2xl font-bold">{tier.price}</p>
                <p className="text-sm text-[#888888]">{tier.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-[#007BFF]">&check;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
