"use client";
import { Card, Button } from 'antd';
import Link from 'next/link';
import {
  FaTools,
  FaMicrochip,
  FaWrench,
  FaCogs,
  FaSearch,
  FaRobot,
  FaSatelliteDish,
  FaHospital,
} from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'General Order Supplier',
      description:
        'Sourcing high-quality equipment from office essentials to advanced machinery, optical cables, and robotics spares with reliability and precision.',
      icon: <FaTools className="text-4xl text-blue-600" />,
    },
    {
      title: 'Electronics Repair Services',
      description:
        'Restoring industrial and medical electronics like control equipment and telecom devices for minimal downtime and maximum efficiency.',
      icon: <FaMicrochip className="text-4xl text-blue-600" />,
    },
    {
      title: 'Mechanical Works',
      description:
        'Manufacturing small-scale machinery and spares with JV partners for organizations like SCO and PAC, tailored to enhance efficiency.',
      icon: <FaWrench className="text-4xl text-blue-600" />,
    },
    {
      title: 'PCB Design & Assembly',
      description:
        'Delivering high-speed, multi-layer PCBs for sensitive applications with comprehensive DFM/DFT reviews for prototypes and production.',
      icon: <FaCogs className="text-4xl text-blue-600" />,
    },
    {
      title: 'Reverse Engineering Services',
      description:
        'Revitalizing obsolete tech with schematic recreation and upgrades for industrial, biomedical, and telecom systems.',
      icon: <FaSearch className="text-4xl text-blue-600" />,
    },
    {
      title: 'Robotics & Automation',
      description:
        'Supplying advanced robotics and drones, plus custom R&D solutions for industrial automation and surveillance.',
      icon: <FaRobot className="text-4xl text-blue-600" />,
    },
    {
      title: 'Electronics Engineering',
      description:
        'Designing RF circuits, DSP, FPGA, and embedded systems for military, medical, and commercial applications.',
      icon: <FaCogs className="text-4xl text-blue-600" />,
    },
    {
      title: 'Specialized Products',
      description:
        'Offering innovative tech like LiDAR surveillance stations, smart weather stations, and rugged vehicles for critical applications.',
      icon: <FaSatelliteDish className="text-4xl text-blue-600" />,
    },
    {
      title: 'Hospital Supply Solutions',
      description:
        'Providing dental materials, medical equipment, and general hospital supplies with competitive pricing and reliability.',
      icon: <FaHospital className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto w-full px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Our Comprehensive Services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              hoverable
              className="relative overflow-hidden rounded-lg border-0 shadow-lg transition-transform hover:-translate-y-2"
              bodyStyle={{ padding: '24px' }}
            >
              <div className="absolute right-0 top-0 h-16 w-16 bg-blue-100 opacity-20 rounded-bl-full"></div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-gray-800 md:text-xl">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 md:text-base">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:!bg-blue-700"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}