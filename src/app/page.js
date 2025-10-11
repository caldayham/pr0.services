import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h2>What we offer</h2>
      <ul>
        <li>pipeline tracking</li>
        <li>expenses and income tracking</li>
        <li>create tasks and track job progress</li>
        <li>set goals and track progress / metrics</li>
      </ul>
      <br />
      <h2>What we plan to offer as well</h2>
      <ul>
        <li>Dedicated card for tracking expenses</li>
        <li>payment processing and business banking for taking payments and managing payroll</li>
        <li>image tracking for job - take images associated with tasks</li>
        <li>customizable roles and permissions that change what is accessible to team members</li>
        <li>client portal</li>
        <li>social media integration & scheduling</li>
        <li>access to our lead marketplace - information on clients / cross-sell jobs </li>
      </ul>

    </div>
  );
}
