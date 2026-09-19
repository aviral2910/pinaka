const fs = require('fs');

let data = fs.readFileSync('src/components/Contact.tsx', 'utf8');
data = data.replace('const handleChange = (e) => {', 'const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {');
data = data.replace('const handleSubmit = async (e) => {', 'const handleSubmit = async (e: React.FormEvent) => {');

fs.writeFileSync('src/components/Contact.tsx', data);
