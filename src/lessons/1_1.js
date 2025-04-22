import React from "react";
import { Link } from "react-router-dom";

function Lesson1_1() {
  return (
    <main className="lesson-page">
      <section className="lesson-card">
        <h1>1-1. What is Real Estate Syndication?</h1>

        <p style={{ fontWeight: "500", fontSize: "1.05rem", lineHeight: "1.75" }}>
          Real estate syndication is a partnership structure that allows multiple individuals to pool capital and collectively invest in large-scale property assets. 
        </p>
        <p>It enables investors to access professionally managed real estate deals—like apartment complexes, retail centres, and industrial parks—without personally acquiring or managing the properties.</p>

        <h2 style={{ marginTop: "2.5rem" }}>Structure: GPs vs LPs</h2>
        <p>
          A syndication typically consists of two parties:
        </p>
        <ul>
          <li><strong>General Partner (GP):</strong> Also called the sponsor, this is the active party responsible for sourcing the deal, securing financing, managing the property, and communicating with investors.</li>
          <li><strong>Limited Partners (LPs):</strong> These are passive investors who provide capital in exchange for equity and receive periodic returns but don’t participate in operational decisions.</li>
        </ul>

        <h2 style={{ marginTop: "2rem" }}>How a Syndication Deal Works</h2>
        <p>
          The process begins with the sponsor identifying a property that meets a specific investment thesis. After preliminary underwriting, the sponsor puts the property under contract and begins formal due diligence. An LLC is created to hold the asset, and legal documents (PPM, subscription agreement, operating agreement) are prepared. Equity is raised from LPs and combined with debt financing from a lender.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Once the property is acquired, the sponsor executes the business plan—such as renovations, increasing rents, or stabilising occupancy. Investors receive quarterly or annual reports and distributions. After a typical hold period of 3–7 years, the property is sold or refinanced, and profits are distributed according to a pre-agreed structure.
        </p>

        <hr style={{ margin: "2.5rem 0" }} />

        <h2>Raising Capital: Sources of Investment</h2>
        <p>
          Raising capital is a key part of any syndication. Sponsors often combine multiple capital sources to fully fund a deal:
        </p>

        <ul>
          <li><strong>Accredited Individuals:</strong> High-net-worth investors, friends, family, or professionals investing $50K–$250K+</li>
          <li><strong>Investor Clubs & Angel Groups:</strong> Pools of experienced investors who co-invest as a group</li>
          <li><strong>Institutional Capital:</strong> Family offices, private equity firms, and occasionally REITs</li>
          <li><strong>Crowdfunding Platforms:</strong> Sites like CrowdStreet or RealtyMogul that raise small amounts from many accredited investors</li>
          <li><strong>Self-Directed Retirement Accounts:</strong> Many LPs use SDIRAs or solo 401(k)s to invest tax-efficiently</li>
        </ul>

        <p>
          In addition to equity, most deals use <strong>debt financing</strong> such as:
        </p>

        <ul>
          <li><strong>Bank Loans:</strong> Traditional multifamily or commercial loans with 60–80% LTV</li>
          <li><strong>Bridge Loans:</strong> Short-term interest-only loans used for value-add projects</li>
          <li><strong>Seller Financing or Private Notes:</strong> Flexible structures where the seller or private party finances the deal</li>
        </ul>

        <h2 style={{ marginTop: "2.5rem" }}>Economics & Profit Distribution</h2>
        <p>
          Most syndications follow a preferred return and waterfall structure:
        </p>

        <ul>
          <li><strong>Preferred Return:</strong> Investors receive the first 6–10% of annual returns before the sponsor participates in profits</li>
          <li><strong>Split/Promote:</strong> Once preferred return is met, profits are split—commonly 70/30 in favour of LPs</li>
          <li><strong>Waterfall Tiers:</strong> Larger deals use multi-tiered waterfalls based on performance thresholds</li>
        </ul>

        <p>
          Sponsors may also receive acquisition fees (1–2%), asset management fees (1–2% of revenue), and a disposition/refinance fee (1%).
        </p>

        <hr style={{ margin: "2.5rem 0" }} />

        <h2>Legal Compliance & Documentation</h2>
        <p>
          Because syndication involves pooling investor funds, it falls under SEC regulation. Most deals rely on exemptions under Regulation D:
        </p>

        <ul>
          <li><strong>Rule 506(b):</strong> Private offering to accredited + up to 35 non-accredited investors (no advertising)</li>
          <li><strong>Rule 506(c):</strong> Public advertising permitted, but all investors must be accredited</li>
        </ul>

        <p>
          Legal documents include:
        </p>
        <ul>
          <li><strong>Operating Agreement</strong> – Defines voting rights, profit splits, and responsibilities</li>
          <li><strong>Private Placement Memorandum (PPM)</strong> – Discloses investment risks and terms</li>
          <li><strong>Subscription Agreement</strong> – Signed by investors to formalise their commitment</li>
        </ul>

        <h2 style={{ marginTop: "2.5rem" }}>Example: A Multifamily Deal</h2>
        <p>
          A sponsor identifies a 60-unit apartment building listed at $5.2M. They underwrite the deal with $2M in projected equity and obtain a $3.2M bank loan. The sponsor forms an LLC, prepares offering documents, and raises $2M from 30 LPs contributing ~$65K each. Investors receive an 8% preferred return and a 70/30 profit split above that.
        </p>

        <p>
          Over 5 years, rents increase and expenses are reduced through energy-efficient upgrades. At sale, the building is worth $7.3M. After debt payoff, ~$2M in profit is distributed based on the waterfall structure.
        </p>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <img
            src="https://assets.everspringpartners.com/dims4/default/5258e9c/2147483647/strip/true/crop/1400x735+0+33/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Ffe%2F06%2Ff23661be455e97d009c6ae418995%2Freal-estate-finance.jpg"
            alt="Syndication Diagram"
            style={{ maxWidth: "100%", borderRadius: "10px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}
          />
          <p style={{ fontSize: "0.85rem", color: "#6b46c1", marginTop: "0.5rem" }}>
          Source: <a href="https://www.everspringpartners.com">www.everspringpartners.com</a>
          </p>
        </div>

        <Link to="/" className="back-link">← Back to Home</Link>
      </section>
    </main>
  );
}

export default Lesson1_1;
