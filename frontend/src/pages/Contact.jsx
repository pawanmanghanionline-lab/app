import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    platform: '',
    brandName: '',
    monthlyGMV: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handlePlatformChange = (value) => {
    setFormData(prev => ({ ...prev, platform: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.phone || !formData.email || !formData.platform || !formData.brandName) {
      setError('Please fill all required fields.');
      return;
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://crm.zoho.in/crm/WebToLeadForm';
    form.acceptCharset = 'UTF-8';

    const zohoFields = {
      xnQsjsdp: 'be36e73b140b860d9773b4a2633cf50b982e81cb1e6381324cb0f89a9f542e59',
      xmIwtLD: '6f24ae9bb50c15ca97ea9025740d6952ec3ec872e1b1f88927b87cabeea8f95855847263b2a6988dfe874ff82a840dd4',
      actionType: 'TGVhZHM=',
      'Last Name': formData.name,
      Phone: formData.phone,
      Email: formData.email,
      LEADCF2: formData.platform,
      LEADCF1: formData.brandName,
      'Annual Revenue': formData.monthlyGMV,
      Description: formData.message
    };

    Object.entries(zohoFields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      platform: '',
      brandName: '',
      monthlyGMV: '',
      message: ''
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gr
