Minecraft Pi Samples
=====================

## Execute

Mac/Linux upload samples and execute sample to Raspberry Pi by using Ansible.

```
ansible rpi -m command -a "hostname"
ansible-playbook upload.yml
ansible rpi -m command -a "python ~/minecraft-pi-samples/hello.py"
```
